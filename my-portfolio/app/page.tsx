import Navbar from '@/components/navbar/Navbar'
import Profile from '@/components/section/Section'
import Skills from '@/components/skills/Skills'
import Journey from '@/components/journey/Journey'
import Contact from '@/components/contact/Contact'
export default function Home(){
    return(
        <main>
<div className="bg-sky-800 pt-20 ">
<Navbar/>
<Profile/>
<Journey/>
<Skills/>
<Contact/>
</div>                      

        </main>
    )
}