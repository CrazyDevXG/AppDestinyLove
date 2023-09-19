import Link from "next/link"

export function Co_Interests(){
    return (
            <p className="mt-2 space-x-2 text-gray-500 text-sm">
              My Interests :
                  • <Link href="#" className="inline-block">Travel</Link> •
                  <Link href="#" className="inline-block">Music</Link> •
                  <Link href="#" className="inline-block">Movie</Link> •
                  
              </p>
    )
}