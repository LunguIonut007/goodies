import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import CardCause from './../CardCause/CardCauseComponent'
import AddModal from './../OfferAdd/OfferAddModal'

export default class DashboardComponent extends Component {
  causes = [
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
          <AddModal/>
          <div className='card-container'>
            {
              this.causes.map((cause, index) => 
              <CardCause name={cause.name} shortDescription={cause.shortDescription} motto={cause.motto} src={cause.avatar} />)
            }
          </div>
        </div>
      </div>

    )
  }
}
