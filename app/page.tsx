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
        <div id='intro'>
          <b><h2>Introduction</h2></b>
        <p>
          Hello, my name is Hunter and welcome to my personal website.
        </p>
        </div>
        <div id='career_info'>
          <b><h1>Career Info:</h1></b>
          <div id="school_pathways">
            <b><h2>School Pathways</h2></b>
            <p>
              I am currently a software developer at School Pathways. Most of the work that I do involves
              coding in PHP, HTML, SQL, and JS to create pages, reports, and tools for teachers and staff to use at their school.
              I recently started working within a two-way bridge between our system and a third party learning management system called
              Agilix Buzz using API calls.
            </p>
          </div>
          <div id='gallo'>
            <b><h2>Gallo Winery Internship</h2></b>
            <p>
              I had an internship after graduating at E&J Gallo Winery. Overall it was a great learning experience where I got to work with 
              internal tools and softwares I wouldn't be able to access otherwise.
              My intern project was essentially updating an internal tool to use SSO instead of the default username/password.
              My task was to Check credentials using Microsoft Azure to authenticate users.
              I did not take much work on my end to accompllish this since the work was fairly simple.
              Since I had more time I decided to help out another intern on their project. 
              I used log files and s3 buckets to store usage data of the users who used the internal tool. 
              As much as I am appreciative for the learning experience, I learned quickly
              what kind of software engineering team I want to be a part of. Being able to make impactful and beneficial changes quickly is important to me. 
            </p>
          </div>
          <div id='srp'>
            <b><h2>Service Response Partners</h2></b>
            <p>

            </p>
          </div>
        </div>
        <div id='school'>
          <b><h1>Education:</h1></b>
          <div id='chico_state'>
            <b><h2>Chico State</h2></b>
            <p>
              I went to Chico State from 2019-2022
              Favorite classes: 
            </p>
          </div>
          <div id='butte'>
            <b><h2>Butte College</h2></b>
            <p>
              I went to Butte college from 2016-2019
              Favorite classes:
            </p>
          </div>
        </div>
        <div id='extra_info'>
          <b><h1>Extra Curriculars:</h1></b>
          <div id='candy'>
            <b><h2>Candy</h2></b>
            <p>
              Although my passion for software engineering is a big part of my life I do have other hobbies. 
              One thing I learned around 2020 was how to make hard candy. I've kept up the hobby and learned more and more.
              My inspiration was to make a sour candy that was sour throughout the whole candy, not just the coating.
              After learning about how acids react at certain temperatures I finally cracked how to make super sour candy. (After making like 6 bad batches...)
              I make a variety of hard candies and gummies for all my friends, family, and neighbors. 
              I've considered making a small business out of this hobby as everyone I've made candy for has recommended I sell it.
              Who knows this website might become a candy business one day...
            </p>
          </div>
          <div id='family'>
          <b><h2>Family</h2></b>
            <p>
              I grew up in Chico, CA and still curerntly reside there. My immediate family is still in chico
              and I love being able to see my sisters, their kids, and my parents. We always seem to get together almost every weekend
              for something. My favorite is taking a stroll at the saturday morning markets. 
              </p>
          </div>
          <div id='friends'>
          <b><h2>Friends</h2></b>
            <p>
              Another thing I love to do is play DND with our friend group. It's always fun to get out and be creative and DND allows that.
            </p>
          </div>
          <div id='gym'>
          <b><h2>Gym</h2></b>
            <p>
              Recently I have gotten into better shape with the help of friends motivating me. Our gym group often goes to competetitions. 
              Me personally I love the strongman or powerlifting competitions. Never knew how strong I could get until I tried.
            </p>
          </div>
        </div>

      </div>
      </main>
  )
}
