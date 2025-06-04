import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Image src={"/logo.svg"} alt="logo" width={230} height={153} className="mt-1.5 m-auto" />
      </div>
      <div className="flex flex-row items-center justify-around mt-4">
        <Card className="w-4xl">
          <CardHeader>
            <CardTitle>Hesabınıza giriş yapın</CardTitle>
            <CardDescription>
              <div className="flex justify-between items-center">
                Bütçe yönetimi için giriş yapın veya yeni bir hesap oluşturun.
                <Button variant="link">Kayıt Ol</Button>
              </div>
            </CardDescription>
            <CardAction>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <Image src={"/banner.jpg"} alt="banner" width={500} height={153} className=" rounded-xl" />
              <div className="flex items-center m-auto" >
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">E-Posta</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="elon@tesla.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Parola</Label>
                      </div>
                      <Input id="password" type="password" placeholder="tesla123" required />
                      <Button type="submit" className="w-full">
                        Giriş Yap
                      </Button>
                      <a
                        href="#"
                        className="text-center text-sm underline-offset-2 hover:underline"
                      >
                        Şifreni mi unuttun?
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3 mt-2">
            <p className="text-sm text-muted-foreground">
              made with 🩷 by <a className="font-semibold hover:underline" href="https://github.com/oguzhan-developer" >Oğuzhan YALÇIN</a>
            </p>
          </CardFooter>
        </Card>


      </div>
    </div>
  );
}
