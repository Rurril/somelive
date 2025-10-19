"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { slugify } from "@/lib/utils";

const categories = ["연애 트렌드", "심리 테스트", "연애 기술", "데이트 문화", "AI 연애", "관계 심리"];

export default function AdminWritePage() {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isHot, setIsHot] = useState(false);
  const [changeType, setChangeType] = useState<"up" | "down">("up");
  const [change, setChange] = useState("");
  const [satisfaction, setSatisfaction] = useState("");
  const [tags, setTags] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadingContentImage, setIsUploadingContentImage] = useState(false);
  const contentImageInputRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleContentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingContentImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(errorData.error || "File upload failed");
      }

      const { imageUrl } = await uploadResponse.json();
      const imgTag = `<img src="${imageUrl}" alt="image" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0;" />`;
      setDescription((prev) => prev + imgTag);
      toast({
        title: "성공",
        description: "이미지가 본문에 추가되었습니다.",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "이미지 업로드에 실패했습니다.";
      toast({
        title: "오류",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsUploadingContentImage(false);
      if (contentImageInputRef.current) {
        contentImageInputRef.current.value = "";
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'b' || e.key === 'u')) {
      e.preventDefault();
      const textarea = descriptionRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = description.substring(start, end);
      
      if (!selectedText) return;

      const tag = e.key === 'b' ? 'strong' : 'u';
      const newText = `${description.substring(0, start)}<${tag}>${selectedText}</${tag}>${description.substring(end)}`;
      
      setDescription(newText);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !category || !imageFile) {
      toast({
        title: "오류",
        description: "필수 필드를 모두 채워주세요.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(errorData.error || "File upload failed");
      }

      const { imageUrl } = await uploadResponse.json();

      const today = new Date();
      const dateString = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

      await addDoc(collection(db, "trends"), {
        title,
        slug: slugify(title),
        description,
        category,
        image: imageUrl,
        isHot,
        changeType,
        change,
        satisfaction,
        tags: tags.split(',').map(tag => tag.trim()),
        date: dateString, 
      });

      toast({
        title: "성공",
        description: "새로운 트렌드 글이 성공적으로 발행되었습니다.",
      });

      setTitle("");
      setDescription("");
      setCategory("");
      setImageFile(null);
      setIsHot(false);
      setChangeType("up");
      setChange("");
      setSatisfaction("");
      setTags("");
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.";
      console.error("Error adding document: ", error);
      toast({
        title: "오류",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const previewContent = description.replace(/\n/g, '<br />');

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>새 트렌드 작성</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">제목</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="글 제목을 입력하세요" required />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="description">내용</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => contentImageInputRef.current?.click()}
                  disabled={isUploadingContentImage}
                >
                  {isUploadingContentImage ? "업로드 중..." : "본문 이미지 추가"}
                </Button>
              </div>
              <Textarea id="description" ref={descriptionRef} value={description} onChange={(e) => setDescription(e.target.value)} onKeyDown={handleKeyDown} placeholder="글 내용을 입력하세요. HTML 태그 사용이 가능합니다." rows={15} required />
              <input type="file" ref={contentImageInputRef} onChange={handleContentImageUpload} className="hidden" accept="image/*" />
            </div>

            <div className="space-y-2">
              <Label>미리보기</Label>
              <div
                className="prose prose-lg max-w-none w-full rounded-md border border-input bg-background px-3 py-2 min-h-[240px]"
                dangerouslySetInnerHTML={{ __html: previewContent }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">카테고리</Label>
                <Select onValueChange={setCategory} value={category} required>
                  <SelectTrigger>
                    <SelectValue placeholder="카테고리를 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">대표 이미지</Label>
                <Input id="image" type="file" onChange={(e) => e.target.files && setImageFile(e.target.files[0])} required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="change">등락률 (예: 15%)</Label>
                    <Input id="change" value={change} onChange={(e) => setChange(e.target.value)} placeholder="등락률 수치를 입력하세요" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="changeType">등락 타입</Label>
                    <Select onValueChange={(value: "up" | "down") => setChangeType(value)} value={changeType}>
                    <SelectTrigger>
                        <SelectValue placeholder="등락 타입을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="up">상승 (Up)</SelectItem>
                        <SelectItem value="down">하락 (Down)</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="satisfaction">만족도 (예: 91.2%)</Label>
                    <Input id="satisfaction" value={satisfaction} onChange={(e) => setSatisfaction(e.target.value)} placeholder="만족도 수치를 입력하세요" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="tags">태그 (쉼표로 구분)</Label>
                    <Input id="tags" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="예: 가심비, 분위기, 가치" />
                </div>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Switch id="isHot" checked={isHot} onCheckedChange={setIsHot} />
              <Label htmlFor="isHot">🔥 HOT 트렌드로 표시</Label>
            </div>

            <div className="text-right pt-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "발행 중..." : "발행하기"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
