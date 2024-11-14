# Niomax - Restaurant Single Landing Page
This is a single-page, responsive website for a restaurant. It was a code conversion of a provided **Figma file** from **Softnio**. The goal was to faithfully replicate the design while ensuring a responsive layout and clean, maintainable code.

## Live Preview
To view the live preview of the website, visit [here](http://niomax.vercel.app).

## Features and Highlights
1. **Responsive Design**: The webpage is fully responsive for desktop and mobile devices.
2. **Pixel-Perfect Design**: The webpage is a pixel-perfect replica of the provided Figma file.
3. **Slider and Carousel**: The webpage includes two sliders and carousels to enhance user experience.
4. **Functioning Form**: The reservation form is fully functional, logging user input to the console upon submission.
5. **Optimized for Performance**: The webpage uses semantic HTML, custom fonts, custom icon components, and optimized images for enhanced performance and reduced loading times.

## Major Tech Stack
To develop this single-page website, I aimed to use fast, lightweight, and easy-to-use technologies, so I chose `React` on top of `JavaScript` with `Vite`. For additional functionality, I used the following packages:

1. **TailwindCSS**: I chose Tailwind to streamline UI development and improve the developer experience by enabling faster design.
2. **Swiper**: Given the need for multiple carousels, I selected SwiperJS for simplicity. Alternatives like GSAP or Framer-motion could achieve similar results but would add unnecessary complexity and bundle size for this project.
3. **ReactPlayer**: The design includes a video carousel, so ReactPlayer was used instead of the native `<video>` element to match the Figma design.
4. **React Hook Form**: I used React Hook Form for easier form management and validation. While Formik or TanStack-Form are alternatives, they come with larger bundle sizes that weren’t needed for this project.



## Setup, installetion and usage instruction 
To setup this project, you may pull this repo using the command in your terminal
```
git clone https://github.com/najmulhc/niomax
```

After cloning, you might want to install it using your preferred pakage manager, I am using `bun` here. However, you can use `npm`,`yarn` or even `pnpm` for the same task. 

```
bun install
```

To host the development on your localhost, you need to run the `dev` command of this project using your preferred package manager. In my case,
```
bun dev
```


## Challenges and Solutions

- **Challenge: Implementing the Slider**  
   **Solution**: I initially attempted to create the slider using Framer Motion, but it was challenging to align with the provided design. After some research, I opted for SwiperJS, which provided a more developer-friendly and precise solution. This also allowed me to create a reusable slider navigation component.

- **Challenge: Positioning the Hero Section**  
   **Solution**: The hero section layout was complex, and aligning the images and text was tricky. After experimenting with different layout techniques, I used a combination of Flexbox and positioning to match the Figma design.
