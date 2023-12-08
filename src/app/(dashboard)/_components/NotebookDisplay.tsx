type Notebook = {
  name: string;
  children: Notebook[] | null;
  icon: string | null;
  content: string;
};

type Props = {
  notebooks: Notebook[] | null;
  active: Notebook | null;
};

export default function NotebookDisplay({ notebooks, active }: Props) {
  return (
    <div>
      {notebooks ? (
        <>
          {notebooks.map((notebook) => {
            return (
              <div key={notebook.name} className={`flex items-center gap-2 ${active?.name === notebook.name && "bg-gray-200"}`}>
                <p>{notebook.icon ? notebook.icon :""}</p>
                <p className="line-clamp-1">{notebook.name}</p>
              </div>
            );
          })}
        </>
      ) : (
        <>No Notebooks</>
      )}
    </div>
  );
}
