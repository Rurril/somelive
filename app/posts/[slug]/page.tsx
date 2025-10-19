import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

// Helper function to format date from Firestore Timestamp or string
const formatDate = (date: any) => {
  if (!date) return '';
  // Handle Firestore Timestamp object
  if (date && typeof date.seconds === 'number') {
    const d = new Date(date.seconds * 1000);
    return d.toISOString().split('T')[0].replace(/-/g, '.');
  }
  // Handle string date
  return date;
};

async function getPostBySlug(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  const trendsCollection = collection(db, 'trends');
  const q = query(trendsCollection, where('slug', '==', decodedSlug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  const doc = querySnapshot.docs[0];
  return {
    id: doc.id,
    ...doc.data(),
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>{formatDate(post.date)}</span>
          <Badge variant="outline">{post.category}</Badge>
        </div>
      </div>

      {post.image && (
        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div 
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.description }}
      />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">관련 태그</h3>
            <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">#{tag}</Badge>
                ))}
            </div>
        </div>
      )}
    </article>
  );
}