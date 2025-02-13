"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email({
    message: "Email inválido!",
  }),
  password: z.string().min(6, {
    message: "Adicione uma Senha maior!"
  })
})


const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      email: "",
      password: ""
    },
  });

  return (
    <div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit( async (data) => console.log(data))} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite um E-mail" {...field} />
              </FormControl>
              <FormDescription>
                Adicione um Email válido! 
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Escreva sua senha..." {...field} />
              </FormControl>
              <FormDescription>
                Certifique de lembrar sua senha!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Entrar</Button>
      </form>
    </Form>
     
    </div>
  );
}

export default LoginForm;