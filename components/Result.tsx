"use client";
import { useEffect, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type ResultProps = {
	children: React.ReactNode;
	message: { hasError: boolean; text: string };
	title?: string;
	open: boolean;
	setOpen: any;
	error?: string;
};

export default function Result({
	children,
	title,
	message,
	open,
	setOpen,
	error,
}: ResultProps) {
	return (
		<Dialog modal open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader className="dark:text-white">
					{title && <DialogTitle>{title}</DialogTitle>}
					{message.text.length > 0 && (
						<DialogDescription
							className={cn(message.hasError && "text-red-700")}>
							{message.text}
						</DialogDescription>
					)}
				</DialogHeader>

				<div className="grid gap-2 dark:text-white">{children}</div>
			</DialogContent>
		</Dialog>
	);
}
