import { Modal } from "./Modal"


export const Navbar = () => {

    return (

        <nav class="navbar bg-body-tertiary">
            <div class=" container-fluid d-flex justify-content-between ">

                <a class="navbar-brand" href="#">
                    <img src="https://assets.stickpng.com/images/58e383a9204d556bbd97b149.png" alt="logo" width="50px" height="60px" />  </a>
                <div>
                    <Modal />
                </div>
            </div>



        </nav>

    )

}