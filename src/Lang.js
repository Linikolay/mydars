import React, {Component} from 'react';

const lang = fetch('https://api.mydars.uz/api/get_translates/', {
                  


                    headers: {
                        // 'auth': 'ef899a6d-29d6-4130-8b59-3d95dfbcc9bd',
                       
                        'Content-Type': 'application/json',
                        'auth': "ef899a6d-29d6-4130-8b59-3d95dfbcc9bd",
                         'lang': localStorage.getItem('lang'),
               
                    },
                

                }
            )

                // .then(res => res.json())

                .then(res => {
                
                    return res.json();
                  })
                .then((data) => {
                        // console.log(data)

                   


                    }
                )




export default lang

