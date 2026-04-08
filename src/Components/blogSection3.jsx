"use client";
import Image from "next/image";
import { useState } from "react";
export default function BlogSection3() {
  const [form, setForm] = useState({
    comment: "",
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    comment: "",
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const comment = form.comment.trim();
    const name = form.name.trim();
    const email = form.email.trim();

    let newErrors = {
      comment: "",
      name: "",
      email: "",
    };

    if (!comment) newErrors.comment = "Comment is required";
    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (hasErrors) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm({
      comment: "",
      name: "",
      email: "",
    });
  };
  return (
    <main className=" bg-white py-10">
      <div className="mx-auto max-w-5xl rounded-sm bg-white px-10  py-8  md:px-10">
        <div className="mb-3 text-center font-poppins font-normal text-base leading-none tracking-normal  [leading-trim:cap-height] text-[11px] text-[rgba(23,37,63,1)]">
          Homepage &gt; Blog &gt; Romance Scams
        </div>

        <h1 className="lg:text-[50px] md:text-[30px] text-6 text-[rgba(23,37,63,1)] font-poppins font-bold not-italic text-base leading-none tracking-normal text-center [leading-trim:cap-height]">
          Romance scams: Spot the signs
        </h1>

        <div className="mt-3 flex items-center justify-center gap-2 text-[12px] text-gray-500">
          <Image src="/Images/blogimg17.svg"
            height={32}
            width={32}
            alt="men" />
          <span className="text-[rgba(23,37,63,1)]">
            Article by : <span className="font-medium text-[rgba(23,37,63,1)">TrustFeedback</span>
          </span>
          <span>•</span>
          <span className="text-text-[rgba(23,37,63,1)]">Published : July 23, 2024</span>
        </div>

        <div className="mt-8 overflow-hidden rounded-md">
          <Image
            src="/Images/blogimg2.svg"
            alt="Romance scams hero"
            width={300}
            height={150}
            className="h-[290px] w-full rounded-2xl object-cover"
          />
        </div>

        <section className="mt-8 space-y-6 text-[13px] leading-6 text-slate-700">
          <div>
            <h2 className="mb-2  font-sans font-extrabold text-[24px] leading-[159%] tracking-[0px] text-[rgba(23,37,63,1)]">Our Mission</h2>
            <p className="text-black font-'Basier_Circle' font-normal text-[17px] leading-[29px] tracking-[0%]">
              Our mission is to make your day better. We get it. We like to keep one foot out of every day and we want to help you do that too. You deserve your writing hand or working out, a night out or an extra bath to keep focused or enjoy time. Best fitness when you don&apos;t need while we are stretching. We want you to give yourself a boost to your friends, family and mindfulness.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-[18px] font-extrabold font-poppins  leading-[159%] tracking-normal text-[rgba(23,37,63,1)]">Dive In: SeaQuestLynchburg</h2>
            <p className="text-black font-'Basier_Circle' font-normal text-[17px] leading-[29px] tracking-[0%]">
              Looking for an exciting, immersive and informative animal experience to increase your knowledge? SeaQuest Lynchburg is a special indoor aquarium where you can touch and feed a tropical rainforest, tropical stingrays in one of the world&apos;s largest touch tanks, and discover creatures from around the world. Look and feed sloths from a variety of viewpoints from throughout the exhibit.
            </p>
            <p className="mt-4 text-black font-'Basier_Circle' font-normal text-[17px] leading-[29px] tracking-[0%]">
              Full journeys through the Amazon, California, Egyptian desert, and Alaskan jungle as you interact with sharks, stingrays, reptiles, birds and countless marine life.
            </p>
            <p className="mt-4 text-black font-'Basier_Circle' font-normal text-[17px] leading-[29px] tracking-[0%]">
              Our mission is to make your day better. We get it. We like to escape the rush out of every day and we want to help you do just that too. Whether you&apos;re writing hand or working out, a night out or an extra bath to keep focused or enjoy time. Best fitness when you don&apos;t need while we are stretching. We want you to give yourself a boost to your friends, family and mindfulness.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-[18px] font-extrabold text-[rgba(23,37,63,1)]">Let&apos;s Find</h2>
            <p className="text-black font-'Basier_Circle' font-normal text-[17px] leading-[29px] tracking-[0%]">
              Our mission is to make your day better. We get it. We like to escape the rush out of every day and we want to help you make your day too. You deserve your writing hand or working out, a night out or an extra bath to keep focused or enjoy time. Best fitness when you don&apos;t need while we are stretching. We want you to give yourself a boost to your friends, family and mindfulness.
            </p>
          </div>
        </section>

        <div className="mt-8 overflow-hidden rounded-md">
          <Image
            src="/Images/blogimg6.svg"
            alt="Trust feedback"
            width={300}
            height={150}
            className="h-[220px] w-full rounded-2xl object-cover"
          />
        </div>

        <section className="mt-8 space-y-4 text-[13px] leading-6 text-slate-700">
          <p className="text-black font-'Basier_Circle' font-normal text-[17px] leading-[29px] tracking-[0%]">
            Looking for a way with a measured and informative animal experience to increase your knowledge? SeaQuest Lynchburg is a special indoor aquarium where you can touch and feed a tropical rainforest, tropical stingrays in one of the world&apos;s largest touch tanks, and discover creatures from around the world. Look and feed sloths from a variety of viewpoints from throughout the exhibit.
          </p>

          <p className="text-black font-'Basier_Circle' font-normal text-[17px] leading-[29px] tracking-[0%]">
            Full journeys through the Amazon, California, Egyptian desert, and Alaskan jungle as you interact with sharks, reptiles, birds and countless underwater life.
          </p>

          <p className="text-black font-'Basier_Circle' font-normal text-[17px] leading-[29px] tracking-[0%]">
            Our mission is to make your day better. We get it. We like to escape the rush out of every day and we want to help you make your best life too. Whether you&apos;re writing hand or working out, a night out or an extra bath to keep it lively. Best fitness when you don&apos;t need while we are stretching. We want you to give yourself a boost to your friends, family and mindfulness.
          </p>
        </section>
        <section className="mt-8 bg-[rgba(231,244,239,1)] rounded-3xl h-100 px-10 py-10">
          <h2 className="mb-4 mt-6 text-[18px] font-extrabold text-[rgba(23,37,63,1)]">
            Conclusion
          </h2>
          <p className="text-black font-'Basier_Circle' font-normal text-[17px] leading-[29px] tracking-[0%] mb-8">
            Our mission is to make your day better. We get it. We like to escape the rush out of every day and we want to help you do your best life too. Whether you're working hand or working out, a night out or an extra bath, making the world less stressful. Best mood because you need while we are stretching. We want you to give yourself a boost to your friends, family and mindfulness.
          </p>
        </section>
        <section className="mt-10 border-t border-[#E5E7EB] pt-10">
          <h3 className="mb-6 text-[32px] font-extrabold tracking-[-0.02em] text-[rgba(23,37,63,1)]">
            Leave A Reply
          </h3>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <div className="relative pt-4">
                {!form.comment && (
                  <label
                    htmlFor="comment"
                    className="pointer-events-none absolute left-5 top-4 text-[14px] text-[#A3A3A3]"
                  >
                    Comment<span className="text-red-500">*</span>
                  </label>
                )}

                <textarea
                  id="comment"
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full resize-none rounded-[14px] border border-solid border-[rgba(187,187,187,1)] bg-white px-5 py-4 text-[15px] text-[#17253F] outline-none ${errors.comment
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#D9D9D9] focus:border-slate-400"
                    }`}
                />
              </div>

              {errors.comment && (
                <p className="mt-2 text-sm text-red-500">{errors.comment}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <div className="relative ">
                  {!form.name && (
                    <label
                      htmlFor="name"
                      className="pointer-events-none  px-5 absolute left-5 top-1/2 -translate-y-1/2 text-[14px] text-[#A3A3A3]"
                    >
                      Name<span className="text-red-500">*</span>
                    </label>
                  )}

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full rounded-full border bg-white px-5 py-3 text-[15px] leading-normal text-[#17253F] outline-none ${errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#D9D9D9] focus:border-slate-400"
                      }`}
                  />
                </div>

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  {!form.email && (
                    <label
                      htmlFor="email"
                      className="pointer-events-none px-5 absolute left-5 top-1/2 -translate-y-1/2 text-[14px] text-[#A3A3A3]"
                    >
                      Email<span className="text-red-500">*</span>
                    </label>
                  )}

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full rounded-full border bg-white px-5 py-3 text-[15px] leading-normal text-[#17253F] outline-none ${errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#D9D9D9] focus:border-slate-400"
                      }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {submitted && (
              <p className="text-sm font-medium text-green-600">
                Form submitted successfully
              </p>
            )}

            <button
              type="submit"
              className="inline-flex min-w-[120px] items-center justify-center rounded-full bg-[#16284A] px-8 py-3 text-[15px] font-semibold text-white transition hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
