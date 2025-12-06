import Image, { ImageProps } from 'next/image';

export default function NexImage(props: ImageProps) {
  // Maintain explicit quality if provided, otherwise default to 100
  const { quality, ...rest } = props;
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...rest} quality={quality ?? 100} />;
}
