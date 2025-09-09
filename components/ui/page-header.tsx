interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-2" data-oid="k27dpzc">
      <h1 className="font-bold text-3xl tracking-tight" data-oid="ea8lkwq">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground" data-oid="hdp2omz">
          {description}
        </p>
      )}
    </div>
  );
}
