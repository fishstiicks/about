// Stop being lazy and make it a project json later

import { useState } from 'react';

function HomePage() {
    const [opening, setOpening] = useState(true);
    const [animals, setAnimals] = useState(true);
    const [snacks, setSnacks] = useState(false);
    const [cat, setCat] = useState(true);
    const [dog, setDog] = useState(false);
    const [fish, setFish] = useState(false);
    const [water, setWater] = useState(false);
    const [donut, setDonut] = useState(false);
    const [corn, setCorn] = useState(false);
    const [vfasite, setVFASite] = useState(false);
    const [vfasfd, setVFASFD] = useState(true);
    const [flux, setFlux] = useState(false);
    const [ss, setSS] = useState(false);

    const icons = [setCat, setDog, setFish]
    const snacksList = [setWater, setDonut, setCorn]
    const projects = [setVFASite, setVFASFD, setFlux, setSS]

    function showIcon(key) {
      icons.forEach(icon => {
        if (icon == key) {
          icon(true)
        } else {
          icon(false)
        }
      })
    }

    function showSnack(key) {
      snacksList.forEach(snack => {
        if (snack == key) {
          snack(true)
        } else {
          snack(false)
        }
      })
    }

    function showAnimals() {
      setAnimals(true)
      setSnacks(false)
    }


    function showSnacks() {
      setAnimals(false)
      setSnacks(true)
    }

    function showProject(key) {
      projects.forEach(project => {
        if (project == key) {
          project(true)
        } else {
          project(false)
        }
      })
    }

return (
    <div className="profile">
      { opening ? (
        <div className='intro'>
        <div className='introHeader bounce-in-fwd'>Howdy!</div>
        <div className='scale-up-center'>
        <img className='introPortrait' src="/intro_portrait.png"></img>
        <div className='introText'>
          <p>Hi! My name is Lok and I&apos;s d love to tell you a bit more about myself and my projects.</p>
          <p>Would you like to pick an icon? Grab a snack? Or maybe you&apos;s d just like to <span className="clickable" onClick={() => setOpening(false)}>skip this foolishness</span> and get to the site itself?</p>
          </div>
        <div className='avatarBuilder'>
          <div className='iconPrev'>
            <div className='avatarContainer'>
            { cat && (<img className="avatarImage" src="cat.png"></img>) }
            { dog && (<img className="avatarImage" src="dog.png"></img>) }
            { fish && (<img className="avatarImage" src="fish.png"></img>) }
            { water && (<img className="avatarImage" src="water.png"></img>) }
            { donut && (<img className="avatarImage" src="donut.png"></img>) }
            { corn && (<img className="avatarImage" src="corn.png"></img>) }
            </div>
          </div>
          <div className='avatarToggles'>
            <div className='avatarHeaders'>
              <button className="avatarHeader" onClick={() => showAnimals()}>Icon</button>
              <button className="avatarHeader snackBtn" onClick={() => showSnacks()}>Snack</button>
            </div>
            <div className='avatarOptions'>
            { animals && (
              <div className='avatarButtons fade-in'>
              <button className="optionButton" onClick={() => showIcon(setCat)}><img className="imageBtn" src="cat.png"></img></button>
              <button className="optionButton" onClick={() => showIcon(setDog)}><img className="imageBtn" src="dog.png"></img></button>
              <button className="optionButton" onClick={() => showIcon(setFish)}><img className="imageBtn" src="fish.png"></img></button>
              </div>
            ) }
            { snacks && (
              <div className='avatarButtons fade-in'>
              <button className="optionButton" onClick={() => showSnack(setWater)}><img className="imageBtn" src="water.png"></img></button>
              <button className="optionButton" onClick={() => showSnack(setDonut)}><img className="imageBtn" src="donut.png"></img></button>
              <button className="optionButton" onClick={() => showSnack(setCorn)}><img className="imageBtn" src="corn.png"></img></button>
              </div>
            ) }
            <div>
            </div>
            </div>
            <button className="contBtn" onClick={() => setOpening(false)}>CONTINUE</button>
          </div>
        </div>
        </div>
        </div>
      ) : (
        <div className='mainPage fade-in'>
        <div className='topSection'>
          <div className='aboutSection'>
            <div className="mainTitle">ABOUT</div>
            <div className="profileBody">Hi, thanks for stopping by! My name is Lok (pronounced &apos;s lock&apos;s ) and I&apos;s m a software engineer with a strong interest in game design and user experience.
            <br></br>
            <br></br>
            After years of being sent every spreadsheets meme known to mankind, I finally decided to get into programming! When I&apos;s m not coding, I like to draw, write, and eat copius amounts of salmon.
            <br></br>
            <br></br>
            <div><b>STATUS:</b> Currently open for work.
            <br></br>
            <b>CONTACT:</b><a href="mailto:lokyem.inbox@gmail.com"> lokyem.inbox@gmail.com</a></div></div>
          </div>
          <div className='visitorIcon'>
            <div className='avatarContainer slide-in-top' onClick={() => setOpening(true)}>
              { cat && (<img className="visitorImage" src="cat.png"></img>) }
              { dog && (<img className="visitorImage" src="dog.png"></img>) }
              { fish && (<img className="visitorImage" src="fish.png"></img>) }
              { water && (<img className="visitorImage" src="water.png"></img>) }
              { donut && (<img className="visitorImage" src="donut.png"></img>) }
              { corn && (<img className="visitorImage" src="corn.png"></img>) }
            </div>
          </div>
        </div>
        
        <div className="mainTitle">PROJECTS</div>
        <div className='projectSection'>
        <div className="projectListSection">

            <div className="projectListing" onClick={() => showProject(setVFASFD)} style={{ backgroundColor: vfasfd ? '#d8eeff' : 'aliceblue', borderRadius: '15px' }}>
            <img className="projectIcon" src="/logo_vfasfd.png"></img>
            <div className="projectWords">
              <div className='projectHeader'>
              <div className="projectTitle">Voxenfelle Academy: School Festival Diary</div>
              </div>
              <div className="projectDesc">A visual novel game with stat-raising elements, follow the students of Voxenfelle Academy as they prepare for their school festival. Choose your favorite stalls and upgrade them to completion, getting to know their stories along the way. With 7 stalls with indivdiualized minigames and 35+ character routes, there&apos;s s something for everyone!</div>
            </div>
            </div>

            <div className="projectListing" onClick={() => showProject(setVFASite)} style={{ backgroundColor: vfasite ? '#d8eeff' : 'aliceblue', borderRadius: '15px' }}>
            <img className="projectIcon" src="/logo_vfa.png"></img>
            <div className="projectWords">
              <div className='projectHeader'>
              <div className="projectTitle">Voxenfelle Academy</div>
              <a className='projectLink' href="https://voxenfelle.onrender.com/">🔗 VISIT</a>
              </div>
              <div className="projectDesc">The website for Voxenfelle Academy, a collaborative story-telling project. Guest users can read the story so far, view character and writer profiles, achievements, and more! Registered members of the community can create their own characters and manage their profiles, post their own art, join clubs, and track their reading history.</div>
            </div>
            </div>

            <div className="projectListing" onClick={() => showProject(setFlux)} style={{ backgroundColor: flux ? '#d8eeff' : 'aliceblue', borderRadius: '15px'}}>
            <img className="projectIcon" src="/logo_flux.png"></img>
            <div className="projectWords">
              <div className='projectHeader'>
              <div className="projectTitle">Flux</div>
              <a className='projectLink' href="https://flux-xvf3.onrender.com/">🔗 VISIT</a>
              </div>
              <div className="projectDesc">A social media website for image hosting. Upload your pictures, follow your favorite creators, leave comments on your favorite (or least favorite) posts, or even make private notes on creators and notes to look back on later.</div>
            </div>
            </div>

            <div className="projectListing" onClick={() => showProject(setSS)} style={{ backgroundColor: ss ? '#d8eeff' : 'aliceblue', borderRadius: '15px'}}>
            <img className="projectIcon" src="/logo_ss.png"></img>
            <div className="projectWords">
              <div className='projectHeader'>
              <div className="projectTitle">Solstia Streets</div>
              <a className='projectLink' href="https://voxenfelle.onrender.com/story/Solstia%20Streets">🔗 VISIT</a>
              </div>
              <div className="projectDesc">A text adventure written by shuttlefrog, transferred to a website format. Play as a student of Voxenfelle Academy who recently dreamed of the kidnapped Goddess vessel, Elysia, telling you to &apos;s Find Orion&apos;s s Shield&apos;s ... though the dream has faded from your memory. Explore the town of Solstia while looking for news of her.</div>
            </div>
            </div>

        </div>

        { vfasite && (
        <div className='projectDetailsBox'>
          <div className='fade-in'>
          <div className='projectHeader'>
            <div className='projectTitle'>Voxenfelle Academy Official Site</div>
            <a className='projectLink' href="https://voxenfelle.onrender.com/">🔗 VISIT</a>
          </div>
          <div className='projectInfo'>
            <div className='projectFieldList'>
              <div className='projectField'>STATUS:</div>
              <div className='projectFieldText'>Development on pause for gamejam. Will continue April 2025.</div>
            </div>
            <div className='projectFieldList'>
              <div className='projectField'>PLANS:</div>
              <div className='projectFieldText'>
                <ul>
                  <li>Add mobile version.</li>
                  <li>Add a guest user type that can track their reading progress and submit unofficial art.</li>
                </ul>
              </div>
            </div>
            <img className="projectPic" src="/vfa_prev.PNG"></img>
            <img className="projectPic" src="/vfa_prev_2.PNG"></img>
          </div>
          </div>
        </div>
        )}

        { vfasfd && (
        <div className='projectDetailsBox'>
          <div className='fade-in'>
          <div className='projectHeader'>
            <div className='projectTitle'>Voxenfelle Academy: School Festival Diary</div>
          </div>
          <div className='projectInfo'>
            <div className='projectFieldList'>
              <div className='projectField'>STATUS:</div>
              <div className='projectFieldText'>Public release in APRIL 2025</div>
            </div>
            <img className="projectPic" src="/vfasfd_prev.PNG"></img>
            <img className="projectPic" src="/vfasfd_prev_2.png"></img>
          </div>
          </div>
        </div>
        )}

      { flux && (
        <div className='projectDetailsBox'>
          <div className='fade-in'>
          <div className='projectHeader'>
            <div className='projectTitle'>FLUX</div>
            <a className='projectLink' href="https://flux-xvf3.onrender.com/">🔗 VISIT</a>
          </div>
          <div className='projectInfo'>
            <div className='projectFieldList'>
              <div className='projectField'>STATUS:</div>
              <div className='projectFieldText'>Complete.</div>
            </div>
            <img className="projectPic" src="/flux_prev.PNG"></img>
            <img className="projectPic" src="/flux_prev_2.PNG"></img>
          </div>
          </div>
        </div>
        )}

      { ss && (
        <div className='projectDetailsBox'>
          <div className='fade-in'>
          <div className='projectHeader'>
            <div className='projectTitle'>Solstia Streets</div>
            <a className='projectLink' href="https://voxenfelle.onrender.com/story/Solstia%20Streets">🔗 VISIT</a>
          </div>
          <div className='projectInfo'>
            <div className='projectFieldList'>
              <div className='projectField'>STATUS:</div>
              <div className='projectFieldText'>Complete.</div>
            </div>
            <img className="projectPic" src="/ss_prev.PNG"></img>
            <img className="projectPic" src="/ss_prev_2.PNG"></img>
          </div>
          </div>
        </div>
        )}



        </div>

        </div>
    ) }
    </div>
)
}

export default HomePage;