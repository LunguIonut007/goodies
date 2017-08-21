import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import CardDonator from './../CardDonator/CardDonatorComponent'

export default class DashboardComponent extends Component {
  donatori = [
    {
      name: 'Onestin',
      ups: 3045,
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo quia pariatur, sapiente atque, ab quidem, aut enim quo expedita odio. Voluptate placeat adipisci molestias cupiditate perferendis sapiente id quod!',
      avatar: 'http://lorempixel.com/400/800/'
    },
    {
      name: 'Alt ong jmek',
      ups: 2002,
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo quia pariatur, sapiente atque, ab quidem, aut enim quo expedita odio. Voluptate placeat adipisci molestias cupiditate perferendis sapiente id quod!',
      avatar: 'http://lorempixel.com/400/800/'
    },
    {
      name: 'Alt ong jmek',
      ups: 2002,
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo quia pariatur, sapiente atque, ab quidem, aut enim quo expedita odio. Voluptate placeat adipisci molestias cupiditate perferendis sapiente id quod!',
      avatar: 'http://lorempixel.com/400/800/'
    }
  ]
  render() {
    return (
      <div className='container'>
        <div>
          <PageHeader title='Dashboard' />
          <div className='card-container'>
            hello
          </div>
        </div>
      </div>

    )
  }
}
