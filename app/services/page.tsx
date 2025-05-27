"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import LoginForm from "@/components/login-form";
import SignupForm from "@/components/signup-form";
import EmployeeRegistration from "@/components/employee-registeration";
import ScheduleAssessment from "@/components/schedule-assessment";
import EmployerRegistration from "@/components/employer-registeration";
import EmployerProfile from "@/components/employer-profile";
import EmployerAssessmentRequest from "@/components/employer-assessment-request";
import EmployerCandidateList from "@/components/employer-candidate-list";
import SuccessMessage from "@/components/success-message";

export default function ServicesPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"employer" | "employee" | null>(null);
  const [isSignupMode, setIsSignupMode] = useState(false);

  const [employeeRegistrationSuccess, setEmployeeRegistrationSuccess] = useState(false);
  const [employerRegistrationSuccess, setEmployerRegistrationSuccess] = useState(false);

  const [employeeScreen, setEmployeeScreen] = useState<"registration" | "assessment">("registration");
  const [employerScreen, setEmployerScreen] = useState<"registration" | "profile" | "assessment" | "candidates">("registration");

  const handleLogin = (type: "employer" | "employee") => {
    setIsLoggedIn(true);
    setUserType(type);
    if (type === "employer") {
      setEmployerScreen("registration");
    } else {
      setEmployeeScreen("registration");
    }
  };

  const handleEmployeeRegistrationComplete = () => {
    setEmployeeRegistrationSuccess(true);
  };

  const handleEmployerRegistrationComplete = () => {
    setEmployerRegistrationSuccess(true);
  };

  const continueToEmployeeAssessment = () => {
    setEmployeeRegistrationSuccess(false);
    setEmployeeScreen("assessment");
  };

  const continueToEmployerProfile = () => {
    setEmployerRegistrationSuccess(false);
    setEmployerScreen("profile");
  };

  return (
    <div className="min-h-screen bg-[#050e2d] relative overflow-x-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/background1.png"
          alt="Background"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative z-10 pt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {!isLoggedIn ? (
            <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm max-w-md mx-auto">
              {isSignupMode ? (
                <SignupForm
               
                  onSwitchToLogin={() => setIsSignupMode(false)}
                />
              ) : (
                <LoginForm
                  onLogin={handleLogin}
                  onSwitchToSignup={() => setIsSignupMode(true)}
                />
              )}
            </div>
          ) : (
            <>
              {userType === "employee" && employeeScreen === "assessment" && (
                <button
                  onClick={() => setEmployeeScreen("registration")}
                  className="text-white mb-4"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}

              {userType === "employee" ? (
                <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm">
                  {employeeRegistrationSuccess ? (
                    <SuccessMessage
                      title="Registration Successful!"
                      message="Your employee account has been created successfully. You can now proceed to schedule your assessment."
                      buttonText="Continue to Assessment"
                      onContinue={continueToEmployeeAssessment}
                    />
                  ) : employeeScreen === "registration" ? (
                    <EmployeeRegistration onNext={handleEmployeeRegistrationComplete} />
                  ) : (
                    <ScheduleAssessment />
                  )}
                </div>
              ) : (
                <>
                  {employerRegistrationSuccess ? (
                    <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm">
                      <SuccessMessage
                        title="Registration Successful!"
                        message="Your employer account has been created successfully. You can now access all employer features."
                        buttonText="Continue to Profile"
                        onContinue={continueToEmployerProfile}
                      />
                    </div>
                  ) : employerScreen === "registration" ? (
                    <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm">
                      <EmployerRegistration onSubmit={handleEmployerRegistrationComplete} />
                    </div>
                  ) : (
                    <>
                      <div className="bg-[#b8bdc7] rounded-lg mb-4">
                        <div className="grid grid-cols-3 gap-1">
                          <button
                            onClick={() => setEmployerScreen("profile")}
                            className={`py-3 px-4 text-center text-white font-medium ${
                              employerScreen === "profile" ? "bg-[#2d5184] rounded-lg" : ""
                            }`}
                          >
                            Profile
                          </button>
                          <button
                            onClick={() => setEmployerScreen("assessment")}
                            className={`py-3 px-4 text-center text-white font-medium ${
                              employerScreen === "assessment" ? "bg-[#2d5184] rounded-lg" : ""
                            }`}
                          >
                            Assessment Request
                          </button>
                          <button
                            onClick={() => setEmployerScreen("candidates")}
                            className={`py-3 px-4 text-center text-white font-medium ${
                              employerScreen === "candidates" ? "bg-[#2d5184] rounded-lg" : ""
                            }`}
                          >
                            Candidate List
                          </button>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#3a4a7b]/90 to-[#9ba3b9]/90 rounded-lg p-8 backdrop-blur-sm">
                        {employerScreen === "profile" && <EmployerProfile />}
                        {employerScreen === "assessment" && <EmployerAssessmentRequest />}
                        {employerScreen === "candidates" && <EmployerCandidateList />}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
