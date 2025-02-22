// Convert Mantine styles to Tailwind styles
// left is Mantine style props. Right is Tailwind props
export const MantineConvert = {
	bd: 'border',
	c: 'text',
	ff: 'font',
	fz: 'text',
	fw: 'font',
	lts: 'tracking',
	ta: 'text',
	lh: 'leading',
	fs: '', // no prefix
	tt: '', // no prefix
	td: '', // no prefix
	miw: 'min-w',
	maw: 'max-w',
	mih: 'min-h',
	mah: 'max-h',
	bgsz: 'bg',
	bgp: 'bg',
	bgr: 'bg-repeat',
	bga: 'bg',
	pos: '', // no prefix
	display: '', // no prefix
  };

  export type MantineProps = keyof typeof MantineConvert;
