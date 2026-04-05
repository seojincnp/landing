"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motions";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "전송에 실패했습니다.");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "전송에 실패했습니다.");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          <motion.span variants={fadeInUp} className="text-primary text-sm font-semibold tracking-wide uppercase block">
            Contact
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mt-2 text-2xl sm:text-4xl font-bold text-text">
            문의 & 오시는 길
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-text-light max-w-2xl mx-auto">
            라벨 인쇄에 관한 궁금한 점이 있으시면 언제든 편하게 연락해 주세요.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Info + Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.12)}
          >
            <motion.div className="space-y-6" variants={staggerContainer(0.1)}>
              <motion.div variants={fadeInLeft} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">전화</p>
                  <p className="text-text-light">031-571-9550 / 010-9615-5640</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInLeft} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">이메일</p>
                  <p className="text-text-light">sjin5640@daum.net</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInLeft} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">주소</p>
                  <p className="text-text-light">경기도 구리시 갈매순환로 166번길 45, 구리갈매아너시티 지하2층 BH232~235호</p>
                </div>
              </motion.div>
            </motion.div>

            {/* 오시는 길 - Google Maps */}
            <motion.div
              className="mt-8 rounded-2xl overflow-hidden bg-white shadow-sm"
              variants={fadeInUp}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.602022194114!2d127.11860117882684!3d37.63504823871318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb9605e04510f%3A0x506dcde3712f3a2f!2z6rWs66as6rCI66ek7JWE64SI7Iuc7Yuw!5e0!3m2!1sko!2skr!4v1774073770493!5m2!1sko!2skr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="서진씨엔피 오시는 길"
              />
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="bg-surface border border-gray-100 p-5 sm:p-8 rounded-2xl shadow-md flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
          >
            <h3 className="text-lg font-bold text-text mb-4">견적 문의</h3>

            {status === "success" ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-text mb-1">문의가 접수되었습니다</h4>
                <p className="text-text-light text-sm mb-6">빠른 시일 내에 연락드리겠습니다.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  추가 문의하기
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-4 flex-1" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                    이름 / 회사명 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="홍길동 / OO기업"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">
                    연락처 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="example@company.com"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                    문의 내용 <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full flex-1 min-h-[120px] px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="제작하고 싶은 라벨에 대해 알려주세요. (종류, 수량, 사이즈, 소재 등)"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-white py-3 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "전송 중..." : "견적 요청하기"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
