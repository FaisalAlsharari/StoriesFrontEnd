import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './Home.scss'
import LastStoriesList from './components/stories/LastStoriesList'
export default class Home extends Component {
  
    render() {
        return (
                   <div>
                   <div class="container">
                     <div class="row p-2">
                      
                     </div>
                     <div class=" text-white text-center " >
                       <div class="card-body p-5">
                         <h2>This website offer you two types of stories Imaginations and Realty </h2>
                         <br></br><br></br>
                         <h2 class="text-white m-0">What Should you Read Next?!</h2>
                       </div>
                     </div>
                     <div>
                       <h4>Have you checked out last add Stories?</h4>
                     <LastStoriesList />  
                     </div>
                    </div>
                   
                   <footer class="py-5 ">
                     <div class="container">
                       <p class="m-0 text-center text-white">Copyright &copy;  2019-2020</p>
                     </div>
                   </footer>
                 </div>
                  

        )
    }
}