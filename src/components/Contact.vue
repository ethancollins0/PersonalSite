<template>
    <div class='contact'>
        <section id='contact' class='divider'></section>
        <div class='content-container'>
            <div class='contact-title'>
                <h1>Contact</h1>
            </div>
            <div class='contact-container'>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    .contact {   
        width: 100%;
        height: max-content;
        min-height: calc(100vh + 53px);
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10vh;

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
                display: flex;
                justify-content: center;
                justify-items: center;
                width: 60%;
                border-bottom: 1px solid black;
                margin-bottom: 20px;

                h1 { 
                    font-size: 25pt;
                    font-family: 'raleway-bold';
                }
            }
        }
    }
</style>