export default function PageTitle({ title }: { title: string }) {
  return (
    <>
    <h1 className="main-content-title">{title}</h1>
      <hr />
    </>
  );
}