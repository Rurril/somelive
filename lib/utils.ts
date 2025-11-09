import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to generate URL-friendly slugs
export const slugify = (text: string) => {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-ㄱ-ㅎㅏ-ㅣ가-힣]+/g, '') // Remove all non-word chars except Korean
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

// Helper function to format date from Firestore Timestamp or string
export const formatDate = (date: any) => {
  if (!date) return '';
  // Handle Firestore Timestamp object
  if (date && typeof date.seconds === 'number') {
    const d = new Date(date.seconds * 1000);
    return d.toISOString().split('T')[0].replace(/-/g, '.');
  }
  // Handle string date
  return date;
};
