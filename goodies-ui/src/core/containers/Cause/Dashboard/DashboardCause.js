import React, { Component } from 'react'
import PageHeader from '../../../components/PageHeader/PageHeader'
import CardCause from '../../../components/CardCause/CardCauseComponent'

export default class DashboardComponent extends Component {
  causes = [
    {
      name: 'Onestin',
      ups: 3045,
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo quia pariatur, sapiente atque, ab quidem, aut enim quo expedita odio. Voluptate placeat adipisci molestias cupiditate perferendis sapiente id quod!',
      avatar: 'http://lorempixel.com/400/800/',
            motto:'impreuna putem schimba lumea'
    },
    {
      name: 'Alt ong jmek',
      ups: 2002,
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo quia pariatur, sapiente atque, ab quidem, aut enim quo expedita odio. Voluptate placeat adipisci molestias cupiditate perferendis sapiente id quod!',
      avatar: 'http://lorempixel.com/400/800/',
            motto:'impreuna putem schimba lumea'

    },
    {
      name: 'Alt ong jmek',
      ups: 2002,
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo quia pariatur, sapiente atque, ab quidem, aut enim quo expedita odio. Voluptate placeat adipisci molestias cupiditate perferendis sapiente id quod!',
      avatar: 'http://lorempixel.com/400/800/',
      motto:'impreuna putem schimba lumea'
    }
  ]
  render() {
    return (
      <div className='container' style={{minHeight: '90vh'}}>
        <div className='basic-container'>
          <div style={{paddingBottom: 40}}>
          <PageHeader title='Dashboard' />
          </div>
          <div className='card-container'>
            {
              this.causes.map((cause, index) => (<CardCause name={cause.name} shortDescription={cause.shortDescription} motto={cause.motto} src={cause.avatar} />))
            }
          </div>
        </div>
      </div>

    )
  }
}
