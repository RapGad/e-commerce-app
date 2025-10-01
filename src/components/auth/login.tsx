"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password length must be more than 6 characters"),
});

type loginFormsValue = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);


  const onLogin = async(values: loginFormsValue)=>{
    setLoading(true)

    try {
      const { error } = await signIn.email({
        email: values.email,
        password: values.password
      })
      
      if(error){
        toast('Unexpected error')
        console.log(error)
        return
      }

      toast('Login successful')
      router.push('/')
    }catch (e) {
      console.log(e)
      toast(`${e}`)
      return
    }finally{
      setLoading(false)
    }
  }
  

  const form = useForm<loginFormsValue>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onLogin)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
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
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
