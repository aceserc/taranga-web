import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WELCOME_MESSAGES } from "@/contents/welcome-message";
import Image from "next/image";

const WelcomeMessageSection = () => {
  return (
    <section id="welcome-message" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-muted-foreground/60 text-center mb-2 tracking-wider">
          Join us in celebration!
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 gradient-text">
          A Warm Welcome !
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {WELCOME_MESSAGES.map((message, i) => (
          <Card
            key={i}
            className="bg-muted/20 group hover:bg-muted/30 transition-colors"
          >
            <CardHeader className="flex flex-row gap-4">
              <Image
                src={message.image}
                width={100}
                height={100}
                alt={message.name}
                className="h-16 w-16 object-cover object-center rounded-md"
              />
              <div className="sm:self-end">
                <CardTitle className="max-sm:hidden">
                  Message from {message.post}
                </CardTitle>
                <CardDescription>
                  <span>{message.name}</span>
                  <span className="sm:hidden">&nbsp;- {message.post}</span>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground group-hover:text-card-foreground transition-all">
                {message.message}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
export { WelcomeMessageSection };
