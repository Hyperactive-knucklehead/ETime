const newsDetailsSection = document.getElementById("newsDetails");
const findNewsTitle = (title) => {
  return localStorage.getItem(title);
};
const appleNewsGlass = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("Apple Glasses")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://cdn.mos.cms.futurecdn.net/G9cxMFp4BXmPnuxJCxTAXV-970-80.jpeg.webp" alt="${title}">
        <p>
        The Apple Glass augmented reality glasses could be a futuristic wearable product that overlays graphics in the real world around you.
        When we first heard word of "Apple Glasses," rumors suggested the lenses would launch as soon as this year. But based on newer leaks and insider intel, the near future Apple augmented reality glasses looks blurry.        
        </p>
     </div>
     <div>
        <p>
            Apple Glass is coming 2023 at the earliest, according to a report from Bloomberg. An Apple VR headset positioned to compete with the Oculus Rift 2 is closer to launch.
        </p>

        <p>
            But according to TF International Securities analyst Ming-Chi Kuo — perhaps the most reputable and reliable Apple expert — Apple Glass won't be ready to ship until 2022 "at the earliest." However, a presentation shown internally at Apple and leaked to The Information sets the launch date as 2023, as Bloomberg suggested.
        </p>

        <p>
            All could be wrong — Jon Prosser, a reputable Apple leaker, says Apple Glasses could come sooner than we thought. Prosser believes the launch is aimed for "March-June 2021." But that's come and passed.
        </p>

        <p>

        </p>

        <p>
            The company could plan to unveil the lenses as a "one more thing" announcement at its annual fall keynote, according to Prosser.
        </p>

        <p>
            As of July 10, The Information reported that Apple Glass lenses had passed the prototype stage and entered trial production, and important milestone in bringing Apple's wearable device to market. 
        </p>
     </div>
    </div>
      `;
  }
};
appleNewsGlass();

const elonMuskPhoneNews = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("Elon Musk's old phone number")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <h4>This woman has the Tesla CEO's former number and gets some interesting calls.</h4>
        <img loading="lazy" src="https://i.ibb.co/8xBfwT6/gettyimages-1206292075.jpg" alt="${title}">
        <p>
        Lyndsay Tucker, a 25-year-old skin care consultant at Sephora, gets a lot of calls about bionic limbs and people volunteering to go to space. That's because her phone number once belonged to Tesla and SpaceX CEO Elon Musk. 
        </p>
     </div>
     <div>

        <p>
            Tucker gets at least three calls or texts meant for Musk each day, she told NPR, in a Thursday report. That volume rises exponentially when he's involved in a scandal. 
        </p>

        <p>
            Once, she told the publication, the Internal Revenue Service called trying to reach Musk regarding a tax issue. 
        </p>

        <p>
            "I assumed I had messed something up," Tucker told NPR. "It was a huge relief they weren't looking for me."

        </p>

        <p>
            Public records trace Tucker's number to a condo Musk once owned in Palo Alto, California, NPR reports. When he got rid of the number, AT&T randomly gave it to Tucker. Unfortunately, that number has been widely shared online as belonging to Musk.
        </p>

        <p>
            In response to an email from NPR regarding the digits, Musk reportedly said, "Wow. That number is so old! I'm surprised it's still out there somewhere."

            The mixup apparently forces Tucker to stay on top of the latest news around Musk. 
        </p>
        <p>
            "Whenever I see his name pop up in the news, I'm like, 'OK, I have to actually learn what he said because, chances are, someone is going to message me about it or call me about it,'" Tucker told NPR. "Even though I find it funny most of the time, it does get irritating sometimes when it's like call after call after call."
        </p>
     </div>
    </div>
      `;
  }
};
elonMuskPhoneNews();

const chrisPrattNews = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("Chris Pratt")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <h4>Ohhhhhh, Chris. What have you done!</h4>
        <img loading="lazy" src="https://i.ibb.co/NmsTtps/PU1ha-W5-Jb-WFn-ZQ.png" alt="${title}">
        <p>
        Chris Pratt decided to get stuck in to his emails after his son literally gasped after seeing that 35,000 of them were unread. He then vowed to get through 1,000 emails a day.  
        </p>
     </div>
     <div>

        <p>
            We've all been there, right? Having an inbox that looks like it's never-ending?! Well, he's proven yet again that he's just like us - signing up for anything & everything. 
        </p>

        <p>
            So, I'm going to paint a picture for you. Imagine having a MOUNTAIN of emails...but then imagine deleting them all. Permanently. Never to be seen again.
        </p>

        <p>
        That's exactly what Chris Pratt did, documenting the horror on his Instagram!

        </p>

        <p>
        "Okay, okay. I'm trying not to panic. I think I just tried something to delete anything unread and it just deleted them. And now, I'm like, Oh no. I needed to read them
        </p>

        <p>
        "I don't know where they went. So, and now my battery's dying. I think I got them all."If I owe you an email, you might want to follow up on that. Resubmit, perhaps, the email and then I'll read it because it may have just gotten deleted. Yup, 51,000 messages are in the trash.
        </p>
     </div>
    </div>
      `;
  }
};
chrisPrattNews();

const launchRocketNews = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("launch a rocket")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <h4>The company will light up the sky with LauncherOne.</h4>
        <img loading="lazy" src="https://i.ibb.co/z7kYtr6/vo-launch-org.jpg" alt="${title}">
        <p>
        Though Virgin Orbit has been devoting some of its resources to help build ventilators for California's Emergency Medical Services Authority during the Covid-19 pandemic, the company also has big plans for this week, with the first demonstration of its LauncherOne rocket. 
        </p>
     </div>
     <div>

        <p>
        LauncherOne is Virgin's take on an orbital launch system. Rather than blasting off from the ground like SpaceX, Rocket Lab or other competitors, founder Richard Branson's concept involves attaching a small rocket to the belly of a modified 747, flying it above 75 percent of Earth's atmosphere and launching it from there.
        </p>

        <p>
        Last July, Virgin Orbit completed a test run in which a rocket was successfully dropped from Cosmic Girl, a 747 plucked from the Virgin Atlantic fleet, but Launcher One's NewtonThree first stage engine wasn't ignited. 
        </p>

        <p>
        The company planned to do a full demonstration launch Sunday, May 24, but a screwy sensor prompted the team to scrub for the day "out of an abundance of caution."

        </p>

        <p>
        The company tweeted that the issue should be resolved quickly, which would allow for the launch to still go forward during its backup window on Monday between 10 a.m. and 2 p.m. PT. The plan is for Cosmic Girl to take off from Mojave Air and Space Port in California and release the LauncherOne rocket over the Pacific Ocean. After a few seconds of free fall, the rocket's engine will ignite in midair for the first time and head toward low earth orbit. 
        </p>
     </div>
    </div>
      `;
  }
};
launchRocketNews();

const twitterNewRetweet = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("Twitter's New Retweet")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://i.ibb.co/fQLfJ79/twitter-logo-AH-1420x801.webp" alt="${title}">
        <p>
        This isn’t a huge feature, but it can be pretty useful to some people. Now you’re going to be able to see how many people retweeted your tweet and added a comment. This previously did not show up under the retweet number. And was sometimes a bit difficult to actually find in your mentions. 
        </p>
     </div>
     <div>

        <p>
        With this new feature, when you click on the retweet number under your tweet, you’ll be able to see who retweeted it and who retweeted it with a comment. As it now shows in two tabs on that page. It shows you the tweet too, so if you want to reply to their retweet of yours, then you can do so from right there. Which makes things super easier.
        </p>

        <p>
        Of course the feature that we all wanted was an Edit button. But we know that is never really going to come to Twitter unfortunately. So we’ll have to settle for typos in Tweets, unfortunately.
        </p>

        <p>
        Twitter is working on a few other features for its app and platform which should be rolling out in the near future. Like being able to limit who can reply to your tweets.

        </p>

        <p>
        It’s unclear how fast this update is rolling out right now, we have not yet seen it on either Android or the web app. So this could be coming in the next few hours, next few days or even longer. We’ll just have to sit back and wait and see. Hopefully it’ll be sooner rather than later. We have not yet seen a new app update hit the Play Store. So it’s still unclear if this is a server-side update or an actual app update.
        </p>
     </div>
    </div>
      `;
  }
};
twitterNewRetweet();

const macOS = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("MacOS")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>\
        <h3>Apple is launching MacOS Monterey on Oct. 25. Here's how you can download it on your device.</h3>
        <img loading="lazy" src="https://i.ibb.co/p2YZSnq/apple-imac-m1-colors-2021-cnet-2021-040.jpg" alt="${title}">
        <p>
        MacOS Monterey arrives today. We have a list of laptops and desktops compatible with Apple's newest operating system.
        </p>
     </div>
     <div>

        <p>
        MacOS Monterey, Apple's new operating system for Macs, rolls out to Mac devices Monday, Oct. 25. The Monterey OS comes alongside upgrades to Apple's MacBook line, including multiple new M1 chips and a new generation of AirPods. Monterey adds several of the new features found in iOS 15, like spatial audio in FaceTime and Apple's Focus feature.
        </p>

        <p>
        How do I download and install the MacOS Monterey public beta?
        </p>

        <p>
        As of Monday, you no longer need to follow these steps to run MacOS Monterey. But if you like having hands-on previews, here's how to get future MacOS public beta versions on your machine. Note: You should never download a beta version on your primary device, as they're often buggy -- we recommend only doing so if you have a separate tester device available. 
        </p>
     </div>
    </div>
      `;
  }
};
macOS();

const virtualReality = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("Virtual Reality")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://i.ibb.co/kGWTck1/9-Oj-O0-P94-Quk-SDDD23sxw.jpg" alt="${title}">
        <p>
        This course consists of 4 modules that will give you an overview of augmented and virtual reality, teach you about the tools to you can use, and walk you through creating an idea and your very own tour experience. By the end of the course you will have created your first virtual tour!
        </p>
     </div>
     <div>

        <p>
        Minister, Educator, Innovator...L.Michelle Salvant, L.MichelleMedia.co, has been a leader in the Broadcast Media Industry since 1997. Her Christian Faith and passion to document it has caused her to be affectionately known as “Jesus Christ Publicist,’ which she says comes with a Life Mission of producing Media that changes lives for the better.
        </p>

        <p>
        In 2016, L.Michelle and her husband, Sgt. Christopher King Salvant Sr., began their Virtual Reality journey, which has since included the development of a one of a kind Christian VR Storytelling App, BelieveVR, and the creation of the Mission:VR program which introduces Churches/Ministries and Educational organizations to Virtual Reality and the practical ways to use it. L.Michelle currently serves as the VR lead at Florida A&M University and Media Ministry Leader at Higher Dimension Church Tallahassee. She resides in Tallahassee, FL with her husband and son, Christopher Jr.
        </p>
     </div>
    </div>
      `;
  }
};
virtualReality();

const microprocessor = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("microprocessors")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://i.ibb.co/sbMZxZb/coolingmicro.jpg" alt="${title}">
        <p>
        "Cool it!" That's a prime directive for microprocessor chips and a promising new solution to meeting this imperative is in the offing. Researchers with the U.S. Department of Energy (DOE)'s Lawrence Berkeley National Laboratory (Berkeley Lab) have developed a "process friendly" technique that would enable the cooling of microprocessor chips through carbon nanotubes.
        </p>
     </div>
     <div>

        <p>
          Frank Ogletree, a physicist with Berkeley Lab's Materials Sciences Division, led a study in which organic molecules were used to form strong covalent bonds between carbon nanotubes and metal surfaces. This improved by six-fold the flow of heat from the metal to the carbon nanotubes, paving the way for faster, more efficient cooling of computer chips. The technique is done through gas vapor or liquid chemistry at low temperatures, making it suitable for the manufacturing of computer chips.
        </p>

        <p>
        "We've developed covalent bond pathways that work for oxide-forming metals, such as aluminum and silicon, and for more noble metals, such as gold and copper," says Ogletree, who serves as a staff engineer for the Imaging Facility at the Molecular Foundry, a DOE nanoscience center hosted by Berkeley Lab. "In both cases the mechanical adhesion improved so that surface bonds were strong enough to pull a carbon nanotube array off of its growth substrate and significantly improve the transport of heat across the interface."
        </p>
        <p>
        Ogletree is the corresponding author of a paper describing this research in Nature Communications. The paper is titled "Enhanced Thermal Transport at Covalently Functionalized Carbon Nanotube Array Interfaces." Co-authors are Sumanjeet Kaur, Nachiket Raravikar, Brett Helms and Ravi Prasher.
        </p>
     </div>
    </div>
      `;
  }
};
microprocessor();

const paymentPortal = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("Payment Portal")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://i.ibb.co/j47SCY5/R.jpg" alt="${title}">
        <p>
        While major banks in the U.S. started delivering $1,400 stimulus checks in March, the federal relief payments continue to arrive at millions of households struggling to make ends meet amid the coronavirus-hobbled economy. The Internal Revenue Service has delivered more than 165 million payments, with a total value of approximately $388 billion, the agency said Wednesday. The latest round includes 1 million payments, with the IRS noting they have an official payment date of May 12. That means the most recent recipients will receive a direct deposit on Wednesday, or soon get a paper check or pre-paid debit card in the mail.
        </p>
     </div>
     <div>

        <p>
        The timing and delivery of checks has been a cause of anxiety for some people, especially for those who receive government benefits such as Social Security and don't typically file taxes. The IRS prioritized sending checks to people who have already filed their 2019 or 2020 tax returns, since the agency was able to quickly verify eligibility based on income and also determine where to mail or direct deposit the checks.
        </p>

        <p>
        Following that initial distribution of checks, the IRS vetted payment data for government benefit recipients, with recipients of Social Security benefits among those still receiving their checks. On Wednesday, the IRS said the payments arriving this week include more than 460,000 "plus-up" payments for people who were owed more stimulus funds than they initially received.
        </p>
        <p>
        The agency said it's sending another 500,000 payments to eligible people who recently filed a tax return but for whom it didn't previously have information to issue a stimulus check. 
        </p>
        <p>
        About half of the newly issued checks were sent via direct deposit, with the other half sent through the mail via paper checks or pre-paid debit cards, the IRS said.
        </p>
     </div>
    </div>
      `;
  }
};
paymentPortal();

const outdoorGames = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("outdoor games")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://i.ibb.co/1sGDbh4/kubb-viking-clash-2.jpg" alt="${title}">
        <p>
        Now that spring weather and warmer temperatures have arrived, it's time to venture outside. And with social-distancing requirements no longer in effect for small outdoor gatherings, you can finally return to parties, barbecues and all the other fun stuff we missed last year.
        </p>
     </div>
     <div>

        <p>
        Kubb (pronounced "koob") has been a Broida family favorite for years. This lawn game is great for all ages (even a young kid could play it), because all you have to do is toss a wood dowel and try to knock over wood blocks. It's a little bit horseshoes, a little bit chess, incredibly fun for two-on-two play (though team sizes can vary if you like). And unlike a lot of the games here, this yard game can be played even on super-windy days.
        </p>

        <p>
        GoSports offers both regulation and backyard versions, the latter simply a bit smaller and priced $10 less. Either way, you'll need a reasonably spacious yard in which to play.
        </p>
        <p>
        The problem with most cornhole games is they're big and heavy, making them hard to take from one place to another. 
        </p>
        <p>
        Tipping Point is self-contained and totally portable, and the game itself brings a little twist to the experience: Instead of two separate boards at either end of the play area, here you've got just one in the center. And it can tilt one way or the other if a bag lands just so -- making it that much more challenging to hit the hole.
        </p>
        <p>
        You do need a flat, solid surface on which to play; Tipping Point isn't ideal for sandy beaches. But if you love cornhole and want a game you can carry in one hand, this is it.
        </p>
     </div>
    </div>
      `;
  }
};
outdoorGames();

const eBike = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("e-bikes")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://i.ibb.co/vwkjMrc/1635007075-night-shot-of-storm-750x375.jpg" alt="${title}">
        <p>
        If you’re looking for a convenient way to zip across town while cutting down on your carbon emissions, an e-bike or electric scooter might be just the ticket. These electric bike and scooter devices make sense for essential short-distance travel, especially considering that public transit systems make it difficult to social distance. And to be clear, the devices on this electric scooter review list are nothing like the kids’ scooter you may have grown up with. These are legitimate electric vehicles with solid tires, a sophisticated braking system, a large battery pack and the ability to cover semirough terrain.
        </p>
     </div>
     <div>

        <p>
        After trying out different types of battery-operated rideables, I’ve learned a lot. Some were tested earlier, while other rides are more recent — all have been on trips through sections of midtown Manhattan, around Central Park or down the West Side Highway bike path. 
        </p>

        <p>
        This roundup, which I’m updating as I review more products, covers electric scooters, foldable electric scooter options and skateboard-like devices. E-bikes get their own list. Why would you want a scooter over a more traditional bike? Electric scooters are nimble and smaller, and are easy to take on mass transit, leave in the trunk of your car or store at home.
        </p>
        <p>
        I’ve included water-resistance ratings when available for each electric scooter. IP ratings (IP stands for ingress protection) let you know the dust or water resistance of a product. For example, if something has an IP54 rating, the first number after the letters refers to resistance to solids while the second refers to moisture. 
        </p>
        <p>
        Also, and let’s not make a big deal of it, but I exceed the rated weight capacity for most of these products. For the most part, they all still performed as expected, though maybe with a little less range or speed. No devices were harmed during this roundup. 
        </p>
     </div>
    </div>
      `;
  }
};
eBike();

const disneyland = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("Disneyland")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://i.ibb.co/4gq2npH/disneyland-paris-castle-dusk.jpg" alt="${title}">
        <p>
        Singers, dancers, acrobats and drummers perform in Lion King: Rhythms of the Pride Lands.
        </p>
     </div>
     <div>

        <p>
        Disney is streaming its Lion King: Rhythms of the Pride Lands stage show from Disneyland Paris on Friday night. The virtual viewing of the prerecorded show will kick off at 7 p.m. ET/4 p.m. PT, and is part of the company's Disney Magic Moments effort to keep fans entertained while its theme parks are closed indefinitely during the spread of COVID-19.
        </p>

        <p>
        The 30-minute show from Disneyland Paris features singers, dancers, acrobats and drummers performing to music from The Lion King, including Circle of Life, I Just Can't Wait to Be King, Hakuna Matata and Can You Feel the Love Tonight. Disney also has an activity sheet that lets you print, color and create masks of the characters Simba, Nala, Timon, Pumbaa and Rafiki. 
        </p>
        <p>
        Disney has been stepping in to fill the void of its theme parks being closed for the foreseeable future due to the spread of the coronavirus (except Shanghai Disneyland, which reopened May 11). You can watch Disney World's Happily Ever fireworks and fireworks from Mickey's Not-So-Scary Halloween Party, and here's when Disneyland and Disney World might reopen following COVID-19 closures. 
        </p>
     </div>
    </div>
      `;
  }
};
disneyland();

const bestCar = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("Best Used Cars")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1607968394/prod/content/dam/CRO-Images-2020/Cars/12Dec/CR-Cars-InlineHero-Best-Used-Cars-10%2C000-20%2C000-2017-Mazda3-12-20" alt="${title}">
        <h3>If low new-car inventory has upended your purchase plans, consider these reliable models that performed well in our tests</h3>
     </div>
     <div>

        <p>
        Vehicles are getting more expensive every year, making it more and more difficult to find a well-regarded car or SUV for under $20,000. That said, there are actually quite a few budget-friendly new and lightly used vehicles out there if you know where to look.
        </p>

        <p>
        Buying a pre-owned car is more than just a great way to save money. It could get you into a model that has safety and luxury features you couldn’t afford in a new car.That is, if you can find a new car or SUV. With the pandemic-related global shortage of the chips needed for car-safety and infotainment systems, shipments of new cars are still delayed or coming in at lower-than-expected volumes. This means supply is short and new-car dealers are charging a premium.
        </p>
        <p>
        The 2020 Kia Soul stretches the definition of SUV to its limits — ground clearance is similar to that of a car, and all-wheel drive is not offered. However, the Soul has more storage space than a typical hatchback, and its boxy profile affords generous headroom akin to what you'd find in an SUV. Indeed, the Soul packs a lot of functionality into its diminutive footprint — there's a surprising amount of rear headroom and legroom, and the interior is intuitively laid out. Though swapping the standard six-speed manual transmission for the CVT automatic on the base LX model will put you right around the $20,000 mark, we think it's worth paying just a little bit more for either the S or GT-Line trim. Both cost the same ($21,410), with the S including safety enhancements and the GT-Line carrying more stylish bodywork.Starting MSRP: $18,610 
        </p>
     </div>
    </div>
      `;
  }
};
bestCar();

const smartSpeaker = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("Best smart speakers")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://cdn.mos.cms.futurecdn.net/79hg4iYi46XPepYSVmQyg4-970-80.jpg.webp" alt="${title}">
        <h3>The top AI-powered speakers are more than music players</h3>
     </div>
     <div>

        <p>
        The best smart speakers not only let you listen to your favorite albums and tracks, they also come with a voice assistant built-in. So whether you want to hear the latest news, weather report, or get your burning questions answered, a smart speaker can take care of it all for you. 
        </p>

        <p>
        Whether you prefer to use Alexa, Google Assistant, or Siri, there’s a smart speaker to suit you. While the most well-known smart speakers are manufactured by the brands behind the voice assistant, such as the Amazon Echo, the Google Nest Audio, or the HomePod Mini, there are a number of third-party smart speakers to choose from, too.  
        </p>
        <p>
        Sonos and Bose are just some of the names combining a choice of voice assistants with their audio expertise to create a wireless smart speaker that doesn’t mean you have to compromise on sound quality. 
        </p>
        <p>
        Unlike the best smart displays, which feature a screen so you can see as well as hear the information a voice assistant is serving up, the best smart speaker only offers audible responses from the voice assistant. But they can still be used to make calls, and get smart home devices to work together.
        </p>
        <p>
        So whether you have smart plugs, smart lights, or even video doorbells or home security cameras, if they’re compatible with the voice assistant built-in to your smart speaker, you’ll be able to use voice to control them, even if they’re made by different manufacturers.
        </p>
     </div>
    </div>
      `;
  }
};
smartSpeaker();

const ipadPro = () => {
  const title = findNewsTitle("newsTitle");
  if (title.includes("iPad Pro")) {
    newsDetailsSection.innerHTML = `<div class="news-details" >
     <div>
        <h1>${title}</h1>
        <img loading="lazy" src="https://i.ibb.co/XtZWksD/Getty-Images-1013445390-f98f18b955134813a7f73bb7481ead3e.webp" alt="${title}">
     </div>
     <div>

        <p>
        The iPad Pro is more powerful than many of the entry-level laptops lining the store shelves. It earns that "Pro" name with a processor that's on par with a mid-level PC and a screen resolution that exceeds many of those same laptops, and the graphics power of an Xbox 360. When you combine these specs with an operating system that supports slide-over and split-screen multitasking and a virtual touchpad, it's time to reevaluate the iPad as a laptop replacement.
        </p>

        <p>
        When the iPad Can Replace Your Laptop
        The common tasks people perform on their laptop or desktop PC are the same tasks in which the iPad excels:Exploring the web.Checking email.Finding out what friends and family are up to on Facebook.Playing games.Balancing your checkbook.Writing a letter or a paper for school. 
        </p>
        <p>
        Productivity has become increasingly easy on the iPad. The virtual touchpad makes manipulating text easier; the iPad supports Microsoft Office and includes a free version of Apple iWork. If you do a lot of typing, connect a Bluetooth keyboard.
        </p>
        <p>
        The iPad has become a portable gaming machine. It doesn't compete with a high-end PC, a PlayStation 4, or an Xbox One in terms of hardcore gaming, but it's more than enough for most of us. The graphics are nearly on par with the Xbox 360 and PlayStation 3, and with its touch controls and motion sensors, the iPad can deliver unique ways to play some good games.
        </p>
     </div>
    </div>
      `;
  }
};
ipadPro();
