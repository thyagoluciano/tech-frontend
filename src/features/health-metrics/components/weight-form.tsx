"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { weightSchema, WeightFormValues } from "../schemas/weight-schema";
import { useCreateWeight } from "../hooks/use-create-weight";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function WeightForm() {
  const { mutate, isPending } = useCreateWeight();

  const form = useForm<WeightFormValues>({
    resolver: zodResolver(weightSchema),
    defaultValues: {
      value: 0,
      date: new Date().toISOString().split("T")[0],
    },
  });

  function onSubmit(values: WeightFormValues) {
    mutate(values, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight (kg)</FormLabel>
              <FormControl>
                <Input type="number" step="0.1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Weight
        </Button>
      </form>
    </Form>
  );
}