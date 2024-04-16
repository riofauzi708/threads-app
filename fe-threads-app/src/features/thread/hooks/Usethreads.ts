import { APIConfig, setAuthToken } from "@/libs/Api";
import { IThreadCard, IThreadPost } from "@/utils/interface/IThreadCard";
import React, { useRef } from "react";

const UseThreads = () => {
  const [threads, setThreads] = React.useState<IThreadCard[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [form, setForm] = React.useState<IThreadPost>({
    content: "",
    image: "",
  });
  const contentInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getThreads = async (): Promise<void> => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        setAuthToken(accessToken);
      }
      
      const response = await APIConfig.get('/threads');
      const sortedThreads = response.data.data.threads.sort((
        a: IThreadCard, b: IThreadCard) => b.id - a.id);
      setThreads(sortedThreads);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePost = async () => {
    try {
      setIsLoading(true);

      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        setAuthToken(accessToken);
      }

      const formData = new FormData();
    formData.append("content", form.content);
    if (form.image !== null) {
      formData.append("image", form.image);
    }

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await APIConfig.post("/threads-new", formData, config);
      console.log(response);
      getThreads();
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContentClick = () => {
    if (contentInputRef.current) {
      contentInputRef.current.focus();
    }
  };

  const handleUpload = () => {
    if (
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files.length > 0
    ) {
      const file = fileInputRef.current.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setForm({
          ...form,
          image: imageUrl,
        });
      };
      reader.readAsDataURL(file);
    } else if (form.image && (form.image.startsWith("http") || form.image.startsWith("https"))) {
      setForm({
        ...form,
        image: form.image,
      });
    }
  };

  return {
    getThreads,
    setThreads,
    handleChange,
    handlePost,
    handleContentClick,
    handleUpload,
    isLoading,
    contentInputRef,
    fileInputRef,
    threads,
  };
};

export default UseThreads;