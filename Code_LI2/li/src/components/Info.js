import React from 'react'
import {more} from "../script/more"

export default function Info() {
  return (
    <div className='container-fluid info'>
        <div className='container'>
          <div className='info_content'>
            <h2>About Us</h2>

            <p className='hidden'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate reiciendis velit odio, quis, quod mollitia temporibus numquam harum nihil consequatur labore asperiores quasi sapiente laudantium et consequuntur maxime non. Aliquam blanditiis quo voluptates quasi sequi, iure ex saepe fuga illum, ut labore provident soluta nobis sed! Ipsa aut molestias deserunt ullam iusto eos nobis nam impedit illo ratione eius excepturi suscipit atque quibusdam quo quae soluta et, esse nihil perspiciatis nostrum earum consequatur sint amet. Deleniti ea dicta rerum soluta obcaecati id sapiente provident blanditiis iure voluptatum? Ab quaerat pariatur quis ea asperiores ad quisquam. Delectus, quasi ut! Iste explicabo voluptates odit molestiae facilis fugit ullam repellat aliquid deleniti rem! Placeat, soluta. Eveniet, repellat? Nisi vero ratione rem consequatur?</p>

            <button onClick={more}>Read More</button>
          </div>
        </div>
    </div>
  )
}
