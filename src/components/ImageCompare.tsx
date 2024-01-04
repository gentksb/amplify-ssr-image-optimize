// react component which compare multi method (Next.js Image, parameter-based optimized, native HTML) showing the same image file
import Image from "next/image"
import NextJsImage from "../app/images/1600x1200.png"

export default function ImageComparePage() {
  return (
    <div className="w-full text-center mt-10 mx-auto">
      <h2 className="text-4xl bold">
        Image Compare(1600x1200 origin or 800x600 view)
      </h2>
      <p>
        ブラウザ開発者ツールからそれぞれの画像サイズを見るとサイズ圧縮されていることが分かります
      </p>
      <h3 className="text-2xl bold mt-5">
        Next.js Image component w/ no sizse setting
      </h3>
      <div className="w-full">
        <Image src={NextJsImage} alt="image-compare-1" className="mx-auto" />
      </div>
      <h3 className="text-2xl bold">Next.js Image component w/ size setting</h3>
      <div className="w-full">
        <Image
          src={NextJsImage}
          alt="image-compare-2 next 800x600"
          width={800}
          height={600}
          className="mx-auto"
        />
      </div>
      <h3 className="text-2xl bold">Native HTML image</h3>{" "}
      <div className="w-full">
        <img
          src={NextJsImage.src}
          alt="image-compare-3 native"
          width={800}
          height={600}
          className="mx-auto"
        />
      </div>
      <h3 className="text-2xl bold">Parameter-based optimized image</h3>{" "}
      <div className="w-full">
        <img
          src={`${NextJsImage.src}?width=400&height=300`}
          alt="image-compare-4 optimized"
          className="mx-auto"
        />
      </div>
    </div>
  )
}
