import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <div>
        <h1>Relative links:</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <a href="https://github.com/ImJeremyWade">
                  <Image src="/gitlogo.png" className="githubIcon" width={50} height={50} alt='GitHub Link' quality={100}/>
                </a>
              </td>
              <td>
                <a href="https://linkedin.com/in/hunter-lupton97">
                  <Image src="/LinkedIn_logo.png" className="LinkedInIcon" width={50} height={50} alt='LinkedIn Link' quality={100}/>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </main>
  )
}
