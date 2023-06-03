import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src='images/bd-img1.jpeg'
            text='Kitsune-Chase: A 2D Multiplayer Web Game with Phaser.JS'
            label='Project 1'
            path='https://www.google.com'
            />
            <CardItem 
            src='images/bd-img1.jpeg'
            text='Interview Scheduler With React'
            label='Project 2'
            path='https://www.google.com'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem 
            src='images/bd-img1.jpeg'
            text='Jungle With Ruby On Rails'
            label='Project 1'
            path='https://www.google.com'
            />
            <CardItem 
            src='images/bd-img1.jpeg'
            text='Interview Scheduler With React'
            label='Project 2'
            path='https://www.google.com'
            />
            <CardItem 
            src='images/bd-img1.jpeg'
            text='TinyApp: An app that allows users to shorten long URLs (à la bit.ly).'
            label='Project 3'
            path='https://www.google.com'
            />
        
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
