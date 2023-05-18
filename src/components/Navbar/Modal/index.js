import { Form } from "./Form"

export const Modal = () => {


    return (
        <div>

            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header d-flex justify-content-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png" alt="logoApple" width="65px" height="65px" href="#index.j" />

                        </div>
                        <div class="modal-body">
                            <Form />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>


    )
}