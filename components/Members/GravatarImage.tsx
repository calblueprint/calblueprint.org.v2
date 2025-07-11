'use client';

import { useState } from 'react';
import Image from 'next/image';
import crypto from 'crypto';
import profilePlaceholder from '@/public/images/about/profile_placeholder.png';

type GravatarImageProps = {
  email: string;
  name: string;
};

export default function GravatarImage({ email, name }: GravatarImageProps) {
  const [error, setError] = useState(false);

  const cleanedEmail = email.trim().toLowerCase();
  const gravatarUrl = `https://www.gravatar.com/avatar/${crypto.createHash('sha256').update(cleanedEmail).digest('hex')}.png?s=300&d=404`;

  return (
    <div className="w-full h-full relative">
      <Image
        src={error ? profilePlaceholder : gravatarUrl}
        alt={name}
        // width={200}
        fill
        // height={200}
        onError={() => setError(true)}
        className="object-cover"
      />
    </div>
  );
}
