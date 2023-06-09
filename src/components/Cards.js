import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <p>Here are some the the projects I've completed so far</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src='images/kitsune-chase.png'
            text='Kitsune-Chase: A 2D Multiplayer Web Game with Phaser.JS'
            label='Project 1'
            path='https://github.com/jameshagans/Kitsune-Chase'
            />
            <CardItem 
            src='images/interview.png'
            text='Interview Scheduler With React'
            label='Project 2'
            path='https://github.com/jameshagans/Interview-Scheduler'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem 
            src='images/jungle.png'
            text='Jungle With Ruby On Rails'
            label='Project 3'
            path='https://github.com/jameshagans/Jungle'
            />
            <CardItem 
            src='images/resource-wall.png'
            text='Resource Wall - An app to allow users to store resources (à la Pinterest)'
            label='Project 4'
            path='https://github.com/jameshagans/resourcewall'
            />
         
        
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
