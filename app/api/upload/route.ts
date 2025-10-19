import { NextResponse } from 'next/server';
import admin from 'firebase-admin';

// Import the service account key
import serviceAccount from '@/lib/serviceAccountKey.json';

// Cast to the correct type to satisfy TypeScript
const typedServiceAccount = serviceAccount as admin.ServiceAccount;

// The bucket name is read from the environment variables for accuracy.
const bucketName = process.env.FIREBASE_STORAGE_BUCKET;
if (!bucketName) {
  throw new Error('FIREBASE_STORAGE_BUCKET environment variable is not set.');
}

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(typedServiceAccount),
    storageBucket: bucketName,
  });
}

const bucket = admin.storage().bucket();

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${Date.now()}_${file.name}`;
    const destination = `trends/${filename}`;

    const blob = bucket.file(destination);
    const blobStream = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.type,
      },
    });

    await new Promise((resolve, reject) => {
      blobStream.on('error', (err) => {
        reject(err);
      });
      blobStream.on('finish', () => {
        resolve(true);
      });
      blobStream.end(buffer);
    });

    await blob.makePublic();
    const publicUrl = `https://storage.googleapis.com/${bucketName}/${destination}`;

    return NextResponse.json({ imageUrl: publicUrl });

  } catch (error) {
    console.error('Error uploading file:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to upload file.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}