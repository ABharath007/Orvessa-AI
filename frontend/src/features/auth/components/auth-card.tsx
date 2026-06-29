import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthCard({
  title,
  description,
  children,
  footer,
}: AuthCardProps) {
  return (
    <Card className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl">
      <CardHeader className="space-y-3 pb-6 text-center">
        <CardTitle className="text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </CardTitle>

        <CardDescription className="text-base leading-6 text-slate-500">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {children}

        {footer && (
          <div className="border-t pt-6 text-center">
            {footer}
          </div>
        )}
      </CardContent>
    </Card>
  );
}