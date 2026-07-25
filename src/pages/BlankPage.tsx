interface Props {
  label: string;
}

const BlankPage = ({ label }: Props) => (
  <main className="min-h-screen bg-background" aria-label={label} />
);

export default BlankPage;
