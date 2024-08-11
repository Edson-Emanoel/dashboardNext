import { BadgeDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Sales() {
      return(
            <Card className="flex-1">
                  <CardHeader>
                        <div className="flex items-center justify-center">
                              <CardTitle className="text-lg sm:text-xl text-gray-800">
                                    Últimos Clientes
                              </CardTitle>
                              <BadgeDollarSign className="ml-auto w-4 h-4" />
                        </div>

                        <CardDescription>
                              Novos clientes nas últimas 24 horas
                        </CardDescription>
                  </CardHeader>

                  <CardContent>
                        <article className="flex items-center gap-2 border-b py-2">
                              <Avatar>
                                    <AvatarImage src="https://github.com/Mueledson.png" />
                                    <AvatarFallback>DEV</AvatarFallback>
                              </Avatar>
                              <div>
                                    <p className="text-sm sm:text-base font-semibold">Muel Edson</p>
                                    <span className="text-[12px] sm:text-sm text-gray-400">teste@teste@gmail.com</span>
                              </div>
                        </article>

                        <article className="flex items-center gap-2 border-b py-2">
                              <Avatar>
                                    <AvatarImage src="https://github.com/Mueledson.png" />
                                    <AvatarFallback>DEV</AvatarFallback>
                              </Avatar>
                              <div>
                                    <p className="text-sm sm:text-base font-semibold">Muel Edson</p>
                                    <span className="text-[12px] sm:text-sm text-gray-400">teste@teste@gmail.com</span>
                              </div>
                        </article>
                        
                        <article className="flex items-center gap-2 border-b py-2">
                              <Avatar>
                                    <AvatarImage src="https://github.com/Mueledson.png" />
                                    <AvatarFallback>DEV</AvatarFallback>
                              </Avatar>
                              <div>
                                    <p className="text-sm sm:text-base font-semibold">Muel Edson</p>
                                    <span className="text-[12px] sm:text-sm text-gray-400">teste@teste@gmail.com</span>
                              </div>
                        </article>
                  </CardContent>
            </Card>
      )
}