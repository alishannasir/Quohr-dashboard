import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { IoIosNotificationsOutline } from "react-icons/io";

  
  export function Notification() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="text-xl font-light rounded-full  p-2 w-10 h-10`"><IoIosNotificationsOutline/></Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="lg:w-full md:w-[600px] sm:w-[400px] bg-gray-100 text-black ">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-black text-xl font-light p-10 ">Individual Upwork and Fiverr Accounts Important</AlertDialogTitle>
            <AlertDialogDescription className="text-black text-xl font-light p-10 ">
               Hello uConnect Team,We would like to bring to your attention an important policy that we have in place at uConnect from the start. It has come to our notice that several members have been maintaining their own private Upwork or Fiverr profiles while working with us. This is a direct violation of our company policy.
                Such actions not only undermine the values we stand for but also have a negative impact on our progress and the relationships we share with our clients. We believe in the power of collaboration and unity, and such individualistic actions can potentially harm the trust and integrity of our team.
                Please note that we will not hesitate to take disciplinary and legal actions against those who are found to be in violation of this policy. We take this matter very seriously and we urge all members to respect the rules and regulations that we have put in place for the betterment of our team and the work we do.
                We urge everyone to disclose and communicate with BD team so that we can move accordingly.
                Thank you for your understanding and cooperation.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  