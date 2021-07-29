import { blue,grey } from './colors'

export const iconNav = {
    homeActive : <path fill={blue.darkSky} fill-rule="nonzero" d="M23.539 8.12L12.537.179a.901.901 0 0 0-1.075 0L.46 8.12c-.374.27-.544.783-.42 1.264.125.48.514.811.958.811h2.53V20.74c0 1.797 1.295 3.26 2.886 3.26h3.791c.55 0 .996-.504.996-1.126V16.46c0-.556.402-1.007.894-1.007s.892.452.892 1.007v6.414c0 .622.446 1.126.997 1.126h3.79c1.592 0 2.887-1.463 2.887-3.26V10.195h2.342c.443 0 .833-.33.957-.81.124-.48-.048-.995-.421-1.264zm-4.873.95v11.67c0 .556-.4 1.008-.893 1.008H14.98V16.46c0-1.797-1.296-3.259-2.887-3.259-1.592 0-2.886 1.462-2.886 3.259v5.288H6.413c-.491 0-.89-.452-.89-1.008V9.07c0-.623-.448-1.127-.998-1.127h-.118L12 2.461l7.596 5.484c-.52.041-.93.528-.93 1.124z"/>,
    postActive : <path fill={blue.darkSky} fill-rule="nonzero" d="M12 0C5.383 0 0 5.384 0 12c0 6.617 5.383 12 12 12s12-5.383 12-12c0-6.616-5.383-12-12-12zm-1.929 15.403a4.423 4.423 0 0 1 3.886-.01l-1.952 2.52-1.934-2.51zm4.962-1.4a6.046 6.046 0 0 0-3.008-.797c-1.076 0-2.107.28-3.028.809l-1.962-2.548 1.325-.544 3.36 1.143a.872.872 0 0 0 .586-.01l3.009-1.135 1.65.59-1.932 2.492zm-.593-4.606l-1.572.593V1.78c.537.045 1.06.136 1.572.261v7.356zm-3.308.635L9.2 9.375V2.134a10.185 10.185 0 0 1 1.933-.354v8.252zm-3.668-.618l-.942.387V3.336c.304-.193.618-.368.942-.53v6.608zm10.052.45l-1.34-.479V2.633c.466.209.913.452 1.34.725v6.506zM12 22.264c-5.66 0-10.264-4.603-10.264-10.263 0-2.85 1.168-5.43 3.05-7.291v6.386c0 .191.064.377.18.53l6.347 8.241a.871.871 0 0 0 .686.339h.007a.871.871 0 0 0 .686-.337l3.226-4.165.012-.024 3.14-4.053a.87.87 0 0 0 .18-.531V4.743a10.237 10.237 0 0 1 3.013 7.258C22.264 17.66 17.66 22.265 12 22.265z"/>,
    rewardActive : <path fill={blue.darkSky} fill-rule="nonzero" d="M20.727 5.449h-4.724l1.739-1.015c.333-.194.538-.548.538-.93V1.08C18.28.483 17.791 0 17.19 0h-3.84c-.503 0-.94.34-1.06.823L12 1.99 11.711.824A1.09 1.09 0 0 0 10.651 0H6.814C6.21 0 5.722.483 5.722 1.081v2.422c0 .383.204.737.538.93L7.999 5.45H3.273C1.468 5.449 0 6.904 0 8.692v2.343c0 1.441.958 2.65 2.271 3.071v6.65C2.271 22.547 3.74 24 5.544 24h12.912c1.805 0 3.273-1.455 3.273-3.243v-6.651c1.314-.422 2.271-1.63 2.271-3.072V8.692c0-1.788-1.468-3.243-3.273-3.243zm-6.522-3.288h1.893v.723l-2.422 1.413.529-2.136zm-6.301 0h1.892l.528 2.136-2.42-1.413v-.723zm-5.722 6.53c0-.595.49-1.08 1.091-1.08h7.379v4.503H3.273a1.087 1.087 0 0 1-1.091-1.08V8.691zm2.271 12.064v-6.478h6.199v7.56H5.544a1.088 1.088 0 0 1-1.09-1.082zm15.094 0c0 .596-.49 1.081-1.091 1.081h-5.107v-7.559h6.198v6.478zm2.271-9.721c0 .597-.49 1.081-1.091 1.081h-7.378V7.611h7.378c.601 0 1.091.486 1.091 1.081v2.342z"/>,
    profileActive : <path fill={blue.darkSky} fill-rule="nonzero" d="M21.437 19.397c.011-.013.015-.029.024-.043A11.925 11.925 0 0 0 24 12c0-6.617-5.383-12-12-12S0 5.382 0 12c0 2.774.955 5.324 2.541 7.358.01.013.013.027.022.038l.045.051a12.049 12.049 0 0 0 1.827 1.857c.106.086.219.161.327.245.22.166.44.33.67.482.16.106.327.202.494.3.19.113.383.223.58.325a11.39 11.39 0 0 0 1.154.518c.188.074.374.146.566.209.221.074.446.136.673.196.18.048.358.1.54.14.266.057.537.098.81.138.15.022.297.052.45.07.427.046.86.073 1.3.073.44 0 .873-.027 1.3-.073.154-.018.303-.048.456-.07.27-.04.539-.081.804-.138.185-.04.366-.092.548-.142.223-.06.444-.12.662-.193.195-.064.387-.137.58-.212a11.321 11.321 0 0 0 1.709-.832c.174-.102.347-.202.516-.313.217-.144.425-.299.633-.456.12-.09.245-.176.362-.272.332-.27.648-.557.95-.86l.03-.035c.296-.3.573-.62.836-.95.018-.019.037-.037.052-.057zM12.001 2.138c5.437 0 9.862 4.423 9.862 9.862a9.805 9.805 0 0 1-1.262 4.812 10.901 10.901 0 0 0-5.521-3.773 4.52 4.52 0 0 0 1.458-3.324 4.542 4.542 0 0 0-4.536-4.537 4.542 4.542 0 0 0-4.538 4.537 4.52 4.52 0 0 0 1.459 3.324 10.892 10.892 0 0 0-5.52 3.773A9.787 9.787 0 0 1 2.14 12C2.139 6.561 6.562 2.138 12 2.138zm7.178 16.603a11.812 11.812 0 0 1-.754.725c-.142.123-.29.239-.437.352-.122.094-.243.19-.368.276-.13.09-.265.174-.398.257-.149.093-.295.189-.45.274-.12.067-.247.126-.371.188-.17.086-.338.173-.513.248-.123.053-.252.096-.378.145-.18.069-.358.14-.542.198-.143.046-.29.079-.436.117-.173.047-.343.098-.52.134-.189.04-.384.063-.577.091-.138.02-.273.049-.412.063a9.963 9.963 0 0 1-2.043 0c-.128-.014-.254-.04-.382-.058-.204-.03-.408-.055-.608-.096-.163-.034-.32-.083-.48-.124-.16-.042-.322-.078-.48-.128-.167-.052-.33-.12-.495-.182-.143-.053-.288-.103-.427-.163-.16-.068-.313-.148-.466-.224-.142-.07-.284-.138-.422-.214-.139-.078-.271-.164-.406-.248-.15-.093-.299-.186-.444-.287-.112-.079-.22-.163-.328-.246a9.589 9.589 0 0 1-.478-.386c-.085-.072-.165-.148-.247-.223a9.372 9.372 0 0 1-.506-.502c-.03-.031-.058-.064-.088-.097a8.754 8.754 0 0 1 7.281-3.903 8.752 8.752 0 0 1 7.279 3.903c-.037.036-.07.074-.104.11zM12 12.115a2.402 2.402 0 0 1-2.4-2.4 2.402 2.402 0 0 1 2.4-2.399 2.401 2.401 0 0 1 2.398 2.4c0 1.322-1.076 2.399-2.398 2.399z"/>,
    exploreActive : <g fill="none" fill-rule="evenodd">
                <g stroke={blue.darkSky}>
                    <path stroke-width="2" d="M13.794 13.423l.063-.179.161-.099 2.528-6.281-5.62 3.778-.062.179-.161.098-2.528 6.282 5.619-3.778z"/>
                    <ellipse cx="12.407" cy="11.961" stroke-width="3" rx="1.68" ry="1.75" transform="rotate(39 12.407 11.961)"/>
                    <ellipse cx="12" cy="12" stroke-width="2" rx="10.52" ry="11"/>
                </g>
             </g>,
    home : <path fill={grey.cool} fill-rule="nonzero" d="M23.539 8.12L12.537.179a.901.901 0 0 0-1.075 0L.46 8.12c-.374.27-.544.783-.42 1.264.125.48.514.811.958.811h2.53V20.74c0 1.797 1.295 3.26 2.886 3.26h3.791c.55 0 .996-.504.996-1.126V16.46c0-.556.402-1.007.894-1.007s.892.452.892 1.007v6.414c0 .622.446 1.126.997 1.126h3.79c1.592 0 2.887-1.463 2.887-3.26V10.195h2.342c.443 0 .833-.33.957-.81.124-.48-.048-.995-.421-1.264zm-4.873.95v11.67c0 .556-.4 1.008-.893 1.008H14.98V16.46c0-1.797-1.296-3.259-2.887-3.259-1.592 0-2.886 1.462-2.886 3.259v5.288H6.413c-.491 0-.89-.452-.89-1.008V9.07c0-.623-.448-1.127-.998-1.127h-.118L12 2.461l7.596 5.484c-.52.041-.93.528-.93 1.124z"/>,
    post : <path fill={grey.cool} fill-rule="nonzero" d="M12 0C5.383 0 0 5.384 0 12c0 6.617 5.383 12 12 12s12-5.383 12-12c0-6.616-5.383-12-12-12zm-1.929 15.403a4.423 4.423 0 0 1 3.886-.01l-1.952 2.52-1.934-2.51zm4.962-1.4a6.046 6.046 0 0 0-3.008-.797c-1.076 0-2.107.28-3.028.809l-1.962-2.548 1.325-.544 3.36 1.143a.872.872 0 0 0 .586-.01l3.009-1.135 1.65.59-1.932 2.492zm-.593-4.606l-1.572.593V1.78c.537.045 1.06.136 1.572.261v7.356zm-3.308.635L9.2 9.375V2.134a10.185 10.185 0 0 1 1.933-.354v8.252zm-3.668-.618l-.942.387V3.336c.304-.193.618-.368.942-.53v6.608zm10.052.45l-1.34-.479V2.633c.466.209.913.452 1.34.725v6.506zM12 22.264c-5.66 0-10.264-4.603-10.264-10.263 0-2.85 1.168-5.43 3.05-7.291v6.386c0 .191.064.377.18.53l6.347 8.241a.871.871 0 0 0 .686.339h.007a.871.871 0 0 0 .686-.337l3.226-4.165.012-.024 3.14-4.053a.87.87 0 0 0 .18-.531V4.743a10.237 10.237 0 0 1 3.013 7.258C22.264 17.66 17.66 22.265 12 22.265z"/>,
    reward : <path fill={grey.cool} fill-rule="nonzero" d="M20.727 5.449h-4.724l1.739-1.015c.333-.194.538-.548.538-.93V1.08C18.28.483 17.791 0 17.19 0h-3.84c-.503 0-.94.34-1.06.823L12 1.99 11.711.824A1.09 1.09 0 0 0 10.651 0H6.814C6.21 0 5.722.483 5.722 1.081v2.422c0 .383.204.737.538.93L7.999 5.45H3.273C1.468 5.449 0 6.904 0 8.692v2.343c0 1.441.958 2.65 2.271 3.071v6.65C2.271 22.547 3.74 24 5.544 24h12.912c1.805 0 3.273-1.455 3.273-3.243v-6.651c1.314-.422 2.271-1.63 2.271-3.072V8.692c0-1.788-1.468-3.243-3.273-3.243zm-6.522-3.288h1.893v.723l-2.422 1.413.529-2.136zm-6.301 0h1.892l.528 2.136-2.42-1.413v-.723zm-5.722 6.53c0-.595.49-1.08 1.091-1.08h7.379v4.503H3.273a1.087 1.087 0 0 1-1.091-1.08V8.691zm2.271 12.064v-6.478h6.199v7.56H5.544a1.088 1.088 0 0 1-1.09-1.082zm15.094 0c0 .596-.49 1.081-1.091 1.081h-5.107v-7.559h6.198v6.478zm2.271-9.721c0 .597-.49 1.081-1.091 1.081h-7.378V7.611h7.378c.601 0 1.091.486 1.091 1.081v2.342z"/>,
    profile : <path fill={grey.cool} fill-rule="nonzero" d="M21.437 19.397c.011-.013.015-.029.024-.043A11.925 11.925 0 0 0 24 12c0-6.617-5.383-12-12-12S0 5.382 0 12c0 2.774.955 5.324 2.541 7.358.01.013.013.027.022.038l.045.051a12.049 12.049 0 0 0 1.827 1.857c.106.086.219.161.327.245.22.166.44.33.67.482.16.106.327.202.494.3.19.113.383.223.58.325a11.39 11.39 0 0 0 1.154.518c.188.074.374.146.566.209.221.074.446.136.673.196.18.048.358.1.54.14.266.057.537.098.81.138.15.022.297.052.45.07.427.046.86.073 1.3.073.44 0 .873-.027 1.3-.073.154-.018.303-.048.456-.07.27-.04.539-.081.804-.138.185-.04.366-.092.548-.142.223-.06.444-.12.662-.193.195-.064.387-.137.58-.212a11.321 11.321 0 0 0 1.709-.832c.174-.102.347-.202.516-.313.217-.144.425-.299.633-.456.12-.09.245-.176.362-.272.332-.27.648-.557.95-.86l.03-.035c.296-.3.573-.62.836-.95.018-.019.037-.037.052-.057zM12.001 2.138c5.437 0 9.862 4.423 9.862 9.862a9.805 9.805 0 0 1-1.262 4.812 10.901 10.901 0 0 0-5.521-3.773 4.52 4.52 0 0 0 1.458-3.324 4.542 4.542 0 0 0-4.536-4.537 4.542 4.542 0 0 0-4.538 4.537 4.52 4.52 0 0 0 1.459 3.324 10.892 10.892 0 0 0-5.52 3.773A9.787 9.787 0 0 1 2.14 12C2.139 6.561 6.562 2.138 12 2.138zm7.178 16.603a11.812 11.812 0 0 1-.754.725c-.142.123-.29.239-.437.352-.122.094-.243.19-.368.276-.13.09-.265.174-.398.257-.149.093-.295.189-.45.274-.12.067-.247.126-.371.188-.17.086-.338.173-.513.248-.123.053-.252.096-.378.145-.18.069-.358.14-.542.198-.143.046-.29.079-.436.117-.173.047-.343.098-.52.134-.189.04-.384.063-.577.091-.138.02-.273.049-.412.063a9.963 9.963 0 0 1-2.043 0c-.128-.014-.254-.04-.382-.058-.204-.03-.408-.055-.608-.096-.163-.034-.32-.083-.48-.124-.16-.042-.322-.078-.48-.128-.167-.052-.33-.12-.495-.182-.143-.053-.288-.103-.427-.163-.16-.068-.313-.148-.466-.224-.142-.07-.284-.138-.422-.214-.139-.078-.271-.164-.406-.248-.15-.093-.299-.186-.444-.287-.112-.079-.22-.163-.328-.246a9.589 9.589 0 0 1-.478-.386c-.085-.072-.165-.148-.247-.223a9.372 9.372 0 0 1-.506-.502c-.03-.031-.058-.064-.088-.097a8.754 8.754 0 0 1 7.281-3.903 8.752 8.752 0 0 1 7.279 3.903c-.037.036-.07.074-.104.11zM12 12.115a2.402 2.402 0 0 1-2.4-2.4 2.402 2.402 0 0 1 2.4-2.399 2.401 2.401 0 0 1 2.398 2.4c0 1.322-1.076 2.399-2.398 2.399z"/>,
    explore : <g fill="none" fill-rule="evenodd">
                <g stroke={grey.cool}>
                    <path stroke-width="2" d="M13.794 13.423l.063-.179.161-.099 2.528-6.281-5.62 3.778-.062.179-.161.098-2.528 6.282 5.619-3.778z"/>
                    <ellipse cx="12.407" cy="11.961" stroke-width="3" rx="1.68" ry="1.75" transform="rotate(39 12.407 11.961)"/>
                    <ellipse cx="12" cy="12" stroke-width="2" rx="10.52" ry="11"/>
                </g>
             </g>,
    location : <path fill="#AAB2BD" fill-rule="nonzero" id="a" d="M10 0C6.13 0 3 3.054 3 6.831c0 4.07 4.42 9.68 6.24 11.818.4.468 1.13.468 1.53 0C12.58 16.512 17 10.9 17 6.83 17 3.054 13.87 0 10 0zm0 9.27c-1.38 0-2.5-1.092-2.5-2.439s1.12-2.44 2.5-2.44 2.5 1.093 2.5 2.44-1.12 2.44-2.5 2.44z"/>,
    price : <path fill="#AAB2BD" fill-rule="evenodd" d="M16.505 13.5A1.514 1.514 0 0 0 18 11.982a1.509 1.509 0 0 0-1.48-1.482A1.507 1.507 0 0 0 15 11.995a1.51 1.51 0 0 0 1.505 1.505m2.084-4.01c1.41-.01 1.41.128 1.41 1.63v3.209c0 .891-.194 1.082-1.108 1.098-.091.002-.182.01-.356.02v2.139c-.002 1.371-.54 1.913-1.911 1.913-4.685.001-9.37.002-14.054 0C.876 19.498 0 18.625 0 16.949V4.946c.001-1.523.913-2.44 2.454-2.442 4.518-.005 9.036-.003 13.553.001.182 0 .421-.017.534.084.198.178.44.442.44.668-.002.226-.238.512-.45.657-.173.118-.462.087-.7.087-4.369.005-8.739.003-13.108.003-.167 0-.334-.001-.5.004-.472.014-.741.29-.736.728.004.436.285.704.746.732.148.009.296.002.444.002h14.11c1.16 0 1.737.57 1.747 1.728.006.719.006 1.438.01 2.157 0 .035.022.07.045.135"/>,
    tag : <path fill="#AAB2BD" fill-rule="evenodd" d="M5.367 4.128a1.331 1.331 0 0 0-1.348-1.326c-.726.008-1.336.624-1.328 1.34.008.723.624 1.334 1.342 1.332a1.344 1.344 0 0 0 1.334-1.346M2.993.5h3.429c.317.018.635.03.951.056.574.048 1.148.094 1.719.164.174.02.358.09.503.188.198.134.365.316.544.48.58.525 1.156 1.053 1.736 1.578.584.529 1.173 1.053 1.757 1.581l2.13 1.933c.583.529 1.168 1.056 1.753 1.584.476.43.942.87 1.432 1.283.372.314.551.69.492 1.17-.076.613-.277 1.183-.672 1.662-.35.425-.728.825-1.095 1.235a1943.192 1943.192 0 0 1-4.049 4.505c-.317.353-.636.704-.953 1.058-.26.292-.602.428-.968.523h-.394c-.171-.058-.367-.081-.509-.181a8.323 8.323 0 0 1-.864-.704c-.868-.802-1.726-1.615-2.587-2.423l-2.75-2.58c-.755-.708-1.516-1.41-2.263-2.127-.389-.373-.782-.748-1.125-1.16C.813 9.847.565 9.292.54 8.652.456 6.378.521 4.103.578 1.83c.012-.448.198-.807.569-1.066.236-.165.504-.222.787-.23L2.994.5"/>,
}