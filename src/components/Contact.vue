<template>
    <div class='contact'>
        <section id='contact' class='divider'></section>
        <div class='content-container'>
            <div class='contact-title'>
                <h1>Contact</h1>
            </div>
            <div class='contact-container'>
                <h2>Let's Get In Touch</h2>
                <div class='contact-form-container'>
                    <form class='contact-form' @submit="handleSubmit">
                        <input id='email-name' type="text" name='name' placeholder="Name" required>
                        <input id='email-email' type="email" name='email' placeholder="Enter Email" required>
                        <textarea id='email-message' name="message" placeholder="Your Message"></textarea>
                        <div class='form-submit-container'>
                            <img v-if="loading" src='@/assets/loading.gif' />
                            <p v-if="failed" class='contact-failure'>Failed to Send Email</p>
                            <p v-if="success" class='contact-success'>Email Sent, Thanks!</p>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <footer class='footer'>
            <div class='contact-social'>
                <v-icon 
                    @click='handleClick'
                    name='github'
                    class='intro-social-icon' 
                    :size="40" 
                    alt='github icon'>mdi-github-box
                </v-icon>
                <v-icon 
                    @click='handleClick'
                    name='linkedin'
                    class='intro-social-icon'
                    :size="40" 
                    alt='linkedin icon'>mdi-linkedin-box
                </v-icon>
                <v-icon 
                    name='medium'
                    @click='handleClick'
                    class='intro-social-icon' 
                    :size="40" 
                    alt='medium icon'>mdi-medium
                </v-icon>
                <v-icon 
                    @click='handleResume'
                    class='intro-social-icon' 
                    :size="40" 
                    alt='resume icon'>mdi-file-account
                </v-icon>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                failed: false,
                loading: false,
                success: false
            }
        },
        methods: {
            registerSuccess(){
                this.success = true
                document.querySelector('#email-name').value = ''
                document.querySelector('#email-email').value = ''
                document.querySelector('#email-message').value = ''
            },
            handleSubmit(event){
                event.preventDefault()
                this.failed = false
                this.success = false
                this.loading = true
                this.validateInputs()
            },
            handleClick(event){
                window.open(this.$store.state.social[event.target.getAttribute('name')], '_blank')
            },
            handleResume(){
                window.open('./Resume.pdf')
            },
            validateInputs(){
                let name = document.querySelector('#email-name').value,
                email = document.querySelector('#email-email').value,
                message = document.querySelector('#email-message').value
                if (name && email && message){
                    this.sendMail(name, email, message)
                } else {
                    this.failed = true
                    this.loading = false
                }
            },
            sendMail(name, email, message){
                fetch(this.$store.state.mailerUrl, {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message
                    })
                }).then(res => res.json())
                .then(res => {
                    this.loading = false
                    res && res.status == 'successful'
                        ? this.registerSuccess()
                        : this.failed = true
                })
            }
        }
    }
</script>

<style lang="scss">
    .contact {   
        width: 100%;
        height: max-content;
        min-height: 100vh;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10vh;

        .footer {
            width: 100%;
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: center;
            height: 50px;
            background: #333;

            .contact-social {
                width: 200px;
                display: flex;
                justify-content: space-evenly;
                align-content: center;

                .intro-social-icon {
                    color: white;
                    transition: .5s;
                }

                .intro-social-icon:hover {
                    cursor: pointer;
                    color: #ffa500;
                }
            }
        }

        .divider {
            height: 1rem;
        }
        
        .content-container {
            margin-top: 10vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .contact-title {
                h1 {
                    color: #fff;
                }
            }

            .contact-container {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                h2 {
                    display: flex;
                    justify-content: center;
                    color: #000;
                    margin-bottom: 15px;
                    font-family: Calibri;
                    font-weight: bold;
                    font-size: 20pt;
                }

                .contact-form-container {
                    width: 60%;
                    min-width: 300px;
                    display: flex;
                    justify-content: center;
                    border: 1px solid black;

                    .contact-form {
                        border-radius: 2px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        height: max-content;
                        align-items: flex-end;
                        padding: 5px;
                        background-color: rgb(200, 190, 176);
                        
                        input {
                            outline: none;
                            border-radius: 2px;
                            width: 100%;
                            min-width: 200px;
                            background: rgb(59, 59, 59);
                            height: 40px;
                            box-sizing: border-box;
                            padding: 10px 15px;
                            font-size: 12pt;
                            margin-bottom: 3px;
                            color: #fff;
                        }

                        textarea {
                            outline: none;
                            border-radius: 2px;
                            width: 100%;
                            height: 150px;
                            background: rgb(59, 59, 59);
                            box-sizing: border-box;
                            padding: 10px 15px;
                            font-size: 12pt;
                            margin-bottom: 3px;
                            color: #fff;
                        }

                        .form-submit-container {
                            width: 100%;
                            display: flex;
                            justify-content: flex-end;
                            align-items: center;
                            align-content: center;

                            .contact-success {
                                color: rgb(19, 119, 19);
                                font-size: 14pt;
                            }

                            .contact-failure {
                                color: red;
                            }

                            button {
                                transition: .5s;
                                outline: none;
                                height: 30px;
                                width: 20%;
                                color: #000;
                                border: 1px solid #000;
                                color: #000;
                                background: #ffa500;
                                border-radius: 2px;
                            }

                            p {
                                display: flex;
                                align-content: center;
                                margin: 0;
                                margin-right: 10px;
                            }

                            img {
                                height: 30px;
                                width: auto;
                            }
                        }

                        button:hover {
                            transition: .5s;
                            box-shadow: 0 0 7px black;
                            font-size: 12.5pt;
                        }
                    }
                    
                }
            }

            .contact-title {
                display: flex;
                justify-content: center;
                justify-items: center;
                width: 60%;
                border-bottom: 1px solid #000;
                margin-bottom: 10vh;

                h1 { 
                    font-size: 25pt;
                    font-family: 'raleway-bold';
                    color: #000;
                }
            }
        }
    }
</style>