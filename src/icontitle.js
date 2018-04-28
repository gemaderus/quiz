import React, { Component } from 'react'

class IconTitle extends Component {
  render() {
    return (
      <svg width="320" height="92">
        <g fill="none" fillRule="evenodd">
          <path
            fill="#42AFFF"
            d="M3.056 48.734c.289-1.083.722-3.608.722-5.844V16.844C.603 16.7.026 14.535.026 14.535L2.118 1.982c1.588.216 6.133.433 8.153.433 2.453 0 8.225-.65 14.43-.65 17.748 0 25.396 10.173 25.396 26.118 0 15.945-8.37 25.468-26.695 25.468-7.07 0-14.43-.36-20.346-4.617zM20.3 15.69v24.025c1.443.65 2.525.722 4.4.722 6.133 0 8.947-4.69 8.947-13.06 0-6.853-3.319-12.048-9.524-12.048-1.803 0-2.958.144-3.823.36zm37.622 36.362c-.866-1.443-1.732-4.473-1.732-9.162 0-4.906.433-11.183.433-11.183l-3.03-1.371V18.504s3.608-1.227 7.648-1.227c6.06 0 11.4.577 11.4 9.524v25.251H57.921zm6.06-36.795c-4.978 0-7.936-3.175-7.936-7.215 0-4.906 3.391-7.864 9.307-7.864 4.33 0 7.864 2.38 7.864 7.07 0 5.05-2.958 8.009-9.235 8.009zM87.32 50.393c-3.103-2.67-5.34-6.926-7.143-10.75-1.443-3.175-2.958-6.205-4.69-7.792V18.648c1.01-.65 3.968-1.37 6.566-1.37 6.06 0 8.585 2.452 10.317 6.997 1.443 3.824 2.525 9.596 4.473 18.182h.433c1.227-6.854 2.525-13.708 3.102-21.212l.217-3.535h13.13c1.516 1.515 2.598 3.319 2.598 7.431 0 6.782-2.164 14.213-6.277 20.923-3.535 5.772-7.431 7.215-13.924 7.215-4.257 0-6.71-1.082-8.802-2.886zm49.526 3.102c-11.471 0-18.253-5.194-18.253-17.387 0-11.616 5.988-19.985 20.634-19.985 7.648 0 14.935 3.246 14.935 11.904 0 5.411-2.814 10.317-12.265 10.317-4.04 0-6.638-.577-8.225-1.37 0 3.895 3.39 4.184 6.565 4.184 4.185 0 8.514-1.226 11.905-2.814l3.463 9.885c-4.113 3.246-10.967 5.266-18.759 5.266zm-2.813-23.087h6.204c.289-.577.361-1.227.361-1.66 0-1.587-.938-2.669-2.958-2.669-2.02 0-3.39 2.02-3.607 4.329zm28.17 21.644c-.793-.938-1.803-3.03-1.803-9.523V31.707l-2.742-.866V18.287s2.958-1.299 6.638-1.226c3.319.072 8.153 1.154 9.451 6.132.145.505.217 1.082.289 1.732h.144c.072-4.473 3.535-8.009 8.009-8.009 2.525 0 5.339.578 6.71 2.093l-2.02 15.511c-1.083-.216-2.454-.432-3.32-.432-4.69 0-6.06 2.525-6.71 3.968v13.996h-14.645zm27.667-3.39l2.67-10.173c3.174 2.453 8.585 3.463 12.192 3.463 2.597 0 4.401-.217 3.752-2.453-7.864.433-17.532-1.732-17.532-10.678 0-6.638 5.267-12.843 16.017-12.843 4.04 0 9.307.578 13.924 3.391l-1.876 10.173c-4.69-1.515-8.08-1.948-11.183-1.948-2.525 0-3.463.433-3.102 2.02 2.165.217 3.968.361 7.07.794 5.051.721 10.823 1.804 10.823 9.812 0 9.019-6.421 13.42-16.81 13.42-6.999 0-13.42-1.948-15.945-4.979zm39.21 3.39c-.866-1.443-1.732-4.473-1.732-9.162 0-4.906.433-11.183.433-11.183l-3.03-1.371V18.504s3.607-1.227 7.647-1.227c6.06 0 11.4.577 11.4 9.524v25.251h-14.719zm6.06-36.795c-4.979 0-7.937-3.175-7.937-7.215 0-4.906 3.391-7.864 9.308-7.864 4.328 0 7.864 2.38 7.864 7.07 0 5.05-2.958 8.009-9.235 8.009zm15.328 26.262V31.057l-3.318-1.876V18.72l4.69-1.154V9.557l13.49-1.948c1.083 1.443 1.877 5.556 1.877 9.235V18h8.802v11.688c-.866 1.226-3.752 2.02-6.782 2.02-.938 0-2.02-.289-2.02-.289v5.339c0 3.102 1.226 4.04 3.68 4.04 1.154 0 2.38-.288 4.184-.793l2.092 9.956c-3.68 2.237-8.297 3.391-13.059 3.391-8.369 0-13.636-2.742-13.636-11.832zM289.75 58.4c0-3.174 1.587-5.988 3.824-8.73-2.67-.36-5.05-2.885-6.205-4.473-1.948-2.597-3.246-5.7-4.473-8.225-1.37-2.813-2.309-4.978-4.04-5.7V18.216c2.092-.794 4.257-.938 5.7-.938 5.122 0 9.45 1.082 11.832 8.225a99.672 99.672 0 0 1 3.463 13.42h.36c1.01-3.608 1.588-6.71 2.02-9.885.29-2.38.434-4.762.434-7.359 0-2.02-.072-1.948-.072-4.04h14.285c1.948 1.804 2.453 4.617 2.453 7.503 0 1.155-.072 2.814-.289 4.113-1.154 7.359-5.772 15.8-12.41 25.18l4.763 3.823-4.906 9.452c-1.083.505-3.464.721-5.123.721-5.988 0-11.616-2.886-11.616-10.029z"
          />
          <path
            fill="#FFF"
            d="M35.716 77.146h2.739v11.15h6.417v2.544h-9.156V77.146zm11.531 3.99c.92-.312 2.622-.664 3.991-.664 2.524 0 3.952 1.173 3.952 3.384v4.226c0 .274.137.352.43.352.157 0 .49-.02.9-.059v2.133c-.078.058-.9.332-1.623.332-.646 0-1.722-.215-1.722-1.33v-.215c-.567.997-1.76 1.74-3.17 1.74-1.858 0-3.677-1.153-3.677-3.305 0-2.191 1.878-3.248 4.206-3.248.685 0 1.467.059 2.113.137v-.293c0-1.487-1.018-1.683-1.84-1.683-.88 0-2.308.215-3.07.391l-.49-1.897zm5.4 5.224c-.509-.078-1.096-.156-1.624-.156-.88 0-2.23.215-2.23 1.408 0 .9.782 1.409 1.663 1.409 1.017 0 2.19-.705 2.19-1.644V86.36zm18.621-9.84h2.622v14.32h-2.094l-.332-1.291c-.705 1.076-1.878 1.487-3.072 1.487-2.934 0-4.832-2.504-4.832-5.282s1.917-5.282 4.793-5.282c1.174 0 2.309.41 2.915 1.213V76.52zm-2.426 6.3c-1.526 0-2.621 1.095-2.621 2.914 0 1.859 1.134 2.954 2.64 2.954 1.664 0 2.7-1.33 2.7-2.934s-1.036-2.935-2.719-2.935zm7.501-2.153h3.835V90.84h-2.641v-7.845l-1.194-.43v-1.898zm2.29-4.343c.84 0 1.525.705 1.525 1.507 0 .821-.704 1.506-1.526 1.506-.84 0-1.467-.685-1.467-1.506 0-.802.626-1.507 1.467-1.507zm3.53 4.343h2.757l2.074 7.18h.04l2.17-7.18h2.779L88.285 90.84h-2.582l-3.54-10.173zm11.08 5.185c0-3.13 2.035-5.38 5.048-5.38 3.15 0 4.675 2.445 4.675 5.145 0 .684-.098 1.174-.098 1.174h-6.827c.117 1.447 1.37 1.995 2.582 1.995a7.41 7.41 0 0 0 2.876-.606l.9 1.975c-1.017.587-2.465.88-3.835.88-3.071 0-5.32-2.073-5.32-5.183zm2.759-.94h4.42c-.058-1.115-.488-2.093-1.975-2.093-1.272 0-2.191.724-2.445 2.093zm9.477-4.147h2.152l.352 1.604c.626-1.29 1.682-1.702 3.482-1.702v2.778h-.333c-1.721 0-2.954.665-2.954 2.856v4.54h-2.7V80.764zm11.53 10.27a8.001 8.001 0 0 1-3.716-.9l.802-1.916s1.408.684 2.797.684c1.39 0 1.84-.489 1.84-.939 0-1.604-5.4-.587-5.4-4.382 0-1.917 1.526-3.11 3.913-3.11 1.506 0 2.895.47 3.619.802l-.802 1.897s-1.33-.587-2.641-.587c-1.135 0-1.565.51-1.565.96 0 1.564 5.38.606 5.38 4.362 0 1.976-1.644 3.13-4.226 3.13zm6.074-10.368h3.834V90.84h-2.64v-7.845l-1.194-.43v-1.898zm2.289-4.343c.84 0 1.526.705 1.526 1.507 0 .821-.705 1.506-1.526 1.506-.842 0-1.468-.685-1.468-1.506 0-.802.626-1.507 1.468-1.507zm11.883.196h2.621v14.32h-2.093l-.332-1.291c-.705 1.076-1.879 1.487-3.072 1.487-2.934 0-4.832-2.504-4.832-5.282s1.917-5.282 4.793-5.282c1.174 0 2.308.41 2.915 1.213V76.52zm-2.426 6.3c-1.526 0-2.621 1.095-2.621 2.914 0 1.859 1.134 2.954 2.64 2.954 1.664 0 2.7-1.33 2.7-2.934s-1.036-2.935-2.719-2.935zm8.362-1.683c.92-.313 2.621-.665 3.99-.665 2.525 0 3.953 1.173 3.953 3.384v4.226c0 .274.137.352.43.352.157 0 .49-.02.9-.059v2.133c-.078.058-.9.332-1.624.332-.645 0-1.721-.215-1.721-1.33v-.215c-.568.997-1.761 1.74-3.17 1.74-1.858 0-3.678-1.153-3.678-3.305 0-2.191 1.879-3.248 4.207-3.248.684 0 1.467.059 2.112.137v-.293c0-1.487-1.017-1.683-1.839-1.683-.88 0-2.308.215-3.071.391l-.49-1.897zm5.4 5.223c-.51-.078-1.096-.156-1.624-.156-.88 0-2.23.215-2.23 1.408 0 .9.782 1.409 1.662 1.409 1.018 0 2.191-.705 2.191-1.644V86.36zm13.31-9.84h2.622v14.32h-2.093l-.333-1.291c-.704 1.076-1.878 1.487-3.071 1.487-2.935 0-4.832-2.504-4.832-5.282s1.917-5.282 4.793-5.282c1.174 0 2.308.41 2.915 1.213V76.52zm-2.425 6.3c-1.526 0-2.622 1.095-2.622 2.914 0 1.859 1.135 2.954 2.642 2.954 1.662 0 2.7-1.33 2.7-2.934s-1.038-2.935-2.72-2.935zm13.515-2.153h2.094l.43 1.35s.802-1.545 2.974-1.545c1.878 0 3.814 1.017 3.814 4.245v6.123h-2.719v-5.986c0-1.194-.782-1.82-1.8-1.82-1.33 0-2.054 1.037-2.054 2.191v5.615h-2.739V80.667zm11.864 5.087c0-3.13 2.348-5.282 5.302-5.282 2.934 0 5.301 2.132 5.301 5.282 0 3.13-2.386 5.282-5.301 5.282-2.935 0-5.302-2.152-5.302-5.282zm5.302-2.935c-1.546 0-2.602 1.194-2.602 2.935 0 1.682 1.056 2.934 2.602 2.934 1.486 0 2.602-1.252 2.602-2.934 0-1.741-1.096-2.935-2.602-2.935zm12.713 3.033c0-3.13 2.035-5.38 5.047-5.38 3.15 0 4.676 2.445 4.676 5.145 0 .684-.098 1.174-.098 1.174h-6.827c.117 1.447 1.369 1.995 2.582 1.995a7.41 7.41 0 0 0 2.876-.606l.9 1.975c-1.018.587-2.465.88-3.835.88-3.071 0-5.321-2.073-5.321-5.183zm2.758-.94h4.422c-.059-1.115-.49-2.093-1.976-2.093-1.272 0-2.191.724-2.446 2.093zm12.686 6.124a8.001 8.001 0 0 1-3.717-.9l.802-1.917s1.408.684 2.797.684c1.39 0 1.84-.489 1.84-.939 0-1.604-5.4-.587-5.4-4.382 0-1.917 1.526-3.11 3.913-3.11 1.506 0 2.895.47 3.619.802l-.802 1.897s-1.33-.587-2.641-.587c-1.135 0-1.565.51-1.565.96 0 1.564 5.38.606 5.38 4.362 0 1.976-1.644 3.13-4.226 3.13zm13.124-13.303h2.27v2.934h2.132v1.996h-2.133v4.93c0 .547.274 1.017.998 1.017.333 0 .724-.059 1.193-.117l.392 1.897a5.08 5.08 0 0 1-2.015.45c-2.407 0-3.248-1.115-3.248-3.62v-4.557h-1.37v-1.585l1.37-.391.41-2.954zm7.168 3.032h2.152l.353 1.604c.626-1.29 1.682-1.702 3.482-1.702v2.778h-.333c-1.721 0-2.954.665-2.954 2.856v4.54h-2.7V80.764zm7.638-.098h3.835V90.84h-2.641v-7.845l-1.194-.43v-1.898zm2.29-4.343c.84 0 1.525.705 1.525 1.507 0 .821-.704 1.506-1.526 1.506-.84 0-1.467-.685-1.467-1.506 0-.802.626-1.507 1.467-1.507zm3.53 4.343h2.758l2.073 7.18h.04l2.17-7.18h2.779l-3.698 10.173h-2.582l-3.54-10.173zm11.1 0h3.834V90.84h-2.64v-7.845l-1.194-.43v-1.898zm2.289-4.343c.841 0 1.526.705 1.526 1.507 0 .821-.705 1.506-1.526 1.506-.841 0-1.467-.685-1.467-1.506 0-.802.626-1.507 1.467-1.507zm4.86 4.813c.92-.313 2.621-.665 3.99-.665 2.524 0 3.952 1.173 3.952 3.384v4.226c0 .274.137.352.43.352.157 0 .49-.02.9-.059v2.133c-.077.058-.9.332-1.623.332-.646 0-1.722-.215-1.722-1.33v-.215c-.567.997-1.76 1.74-3.169 1.74-1.858 0-3.678-1.153-3.678-3.305 0-2.191 1.878-3.248 4.206-3.248.685 0 1.468.059 2.113.137v-.293c0-1.487-1.017-1.683-1.839-1.683-.88 0-2.308.215-3.071.391l-.49-1.897zm5.4 5.223c-.51-.078-1.096-.156-1.624-.156-.88 0-2.23.215-2.23 1.408 0 .9.782 1.409 1.662 1.409 1.017 0 2.191-.705 2.191-1.644V86.36zm6.13-9.84h2.681v11.562c0 .254.137.352.352.352.274 0 .528-.02.94-.059v2.133c-.079.058-1.135.332-1.957.332-1.35 0-2.015-.88-2.015-2.074V76.52z"
          />
        </g>
      </svg>
    )
  }
}

export default IconTitle
