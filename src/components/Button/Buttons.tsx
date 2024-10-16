import { Button } from "@/components/ui/button"

export function Buttons({title, className}: {title: string, className: string}) {
  return <Button variant="outline" className={className}>{title}</Button>
}
