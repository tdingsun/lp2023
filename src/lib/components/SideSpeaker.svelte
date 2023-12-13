<script>
</script>

<div class="basis-[400px] flex flex-col">
	<div class="bg-gradient-to-t from-grey1 to-grey4 basis-2"></div>
	<div class="flex-grow flex justify-center bg-gradient-to-t from-grey4 via-grey2 via-30% to-grey4 relative">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="w-0 h-0">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
        </svg>

        <div class="w-full max-w-[18rem] h-full relative">

            <div class="absolute w-full top-4">
                <div class="blobs w-full absolute">
                    <div class="absolute w-[50%] h-0 p-[25%] top-0 left-3  rounded-[20rem]
                    bg-gradient-to-t from-grey6 via-grey5 via-85% to-grey0
                    "></div>
                    <div class="absolute w-[50%] h-0 p-[25%] top-0 right-3  
                    bg-gradient-to-t from-grey6 via-grey5 via-85% to-grey0
                    rounded-[20rem]"></div>
                    
                </div>
                <div class="blobs w-full absolute">
                    <div class="absolute w-[calc(50%-12px)] h-0 p-[calc(25%-6px)] top-[6px] left-[18px]  rounded-[20rem]
                    bg-gradient-to-t from-grey0 via-grey4 to-grey3
                    "></div>
                    <div class="absolute w-[calc(50%-12px)] h-0 p-[calc(25%-6px)] top-[6px] right-[18px]
                    bg-gradient-to-t from-grey0 via-grey4 to-grey3
                    rounded-[20rem]"></div>
                </div>
                    <div class="absolute w-[30%] p-[15%] bg-grey5 rounded-[20rem] blur-xl left-[35%] top-10 "></div>
            
                    <div class="absolute w-[calc(50%-4rem)] p-[calc(25%-2rem)]  top-8 left-11 rounded-[20rem] radial-gradient-1">
                    </div>
                    <div class="absolute w-[calc(50%-6rem)] p-[calc(25%-3rem)] top-[3rem] left-[3.75rem] rounded-[20rem] radial-gradient-2"></div>
                    <div class="absolute w-[calc(50%-9rem)] p-[calc(25%-4.5rem)] top-[4.375rem] left-[5.125rem] rounded-[20rem] border-grey3 border-2 bg-gradient-to-t from-grey3 to-grey0 "></div>
                    
                    <div class="absolute w-[calc(50%-4rem)] p-[calc(25%-2rem)]  top-8 right-11 rounded-[20rem] radial-gradient-1">
                    </div>
                    <div class="absolute w-[calc(50%-6rem)] p-[calc(25%-3rem)] top-[3rem] right-[3.75rem] rounded-[20rem] bg-grey6"></div>
               
            </div>
            
    
         
            <div class="pb-4 px-10 flex absolute top-0 left-0 w-full h-full hover:scale-105 ">
                <div class="flex-grow border-grey5 border-t-0 border-4 rounded-b-[50rem] relative">
                    <div class="absolute w-full p-[50%] bottom-0 bg-gradient-to-t from-grey0 via-grey1 to-grey5 rounded-[50rem]"></div>
                    <div class="absolute w-[calc(100%-3rem)] p-[calc(50%-1.5rem)] bottom-[1.5rem] left-[1.5rem] bg-grey5 rounded-[50rem] inner-shadow"></div>
                    <div class="absolute w-[calc(100%-6rem)] p-[calc(50%-3rem)] bottom-[3rem] left-[3rem] radial-gradient-2 outer-shadow rounded-[50rem]"></div>
                    <div class="absolute w-[calc(100%-12rem)] p-[calc(50%-6rem)] bottom-[6rem] left-[6rem] radial-gradient-2 rounded-[50rem]"></div>
                    <div class="absolute w-[calc(100%-14rem)] p-[calc(50%-7rem)] bottom-[7rem] left-[7rem] bg-gradient-to-t from-grey3 to-grey0 to-50% outer-shadow rounded-[50rem]"></div>
            
                    
                    <div class="bg-gradient-to-t from-grey5  to-grey1 w-1 h-12 absolute top-0 -left-1"></div>
                    <div class="bg-gradient-to-t from-grey5  to-grey1 w-1 h-12 absolute top-0 -right-1"></div>
                </div>

                
            </div>
        </div>


    </div>
	<div class="bg-gradient-to-t from-grey6 via-grey4 to-grey5 basis-2"></div>
</div>

<style>
    .blobs{
        filter:url('#goo');

    }

    .radial-gradient-1 {
        background-color: theme('colors.grey1');
        box-shadow: inset 0 0 10px theme('colors.grey6');
    }

    .radial-gradient-2 {
        background-image: radial-gradient(
            theme('colors.grey3') 10%,
            theme('colors.grey0') 50%

        );
        box-shadow: 0 0 10px theme('colors.grey6');

    }

    .inner-shadow {
        box-shadow: inset 0 0 20px theme('colors.grey6');
    }

    .outer-shadow {
        box-shadow: 0 0 20px theme('colors.grey6');
    }

    
</style>