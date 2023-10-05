import axios, { AxiosResponse } from 'axios';

// Define interface for response data
interface ApiResponse<T> {
  result: T;
}

// Define interface for video data
interface VideoData {
  title: string;
  video: File;
  category: string;
  description: string;
  duration: number;
  views: number;
  visibility: string;
}

// Define interface for search results
interface SearchResults {
  // Define your search result properties here
}

export const postVideo = async (
  userId: string,
  videoData: FormData,
  onProgress: (progressEvent: ProgressEvent) => void
): Promise<AxiosResponse<string | ApiResponse<string>, any>> => {
  try {
    const config:any = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: onProgress,
    };
    const response = await axios.post<ApiResponse<string>>(
      `${process.env.REACT_APP_NODE_API}video/${userId}`,
      videoData,
      config
    );
    return response;
  } catch (err:any) {
    return err.message;
  }
};

export const searchByTitle = async (
  query: string
): Promise<AxiosResponse<ApiResponse<SearchResults[]> | string>> => {
  try {
    const response = await axios.get<ApiResponse<SearchResults[]>>(
      `${process.env.REACT_APP_NODE_API}video/search?q=${query}`
    );
    return response;
  } catch (err:any) {
    return err.message;
  }
};

export const getById = async (
  videoId: string
): Promise<AxiosResponse<ApiResponse<VideoData> | string>> => {
  try {
    const response = await axios.get<ApiResponse<VideoData>>(
      `${process.env.REACT_APP_NODE_API}searchlist/video/${videoId}`
    );
    return response;
  } catch (err:any) {
    return err.message;
  }
};

export const updateVideo = async (
  userId: string,
  videoId: string,
  videoData: VideoData
): Promise<AxiosResponse<ApiResponse<VideoData> | string>> => {
  try {
    const response = await axios.put<ApiResponse<VideoData>>(
      `${process.env.REACT_APP_NODE_API}video/${userId}/${videoId}`,
      videoData
    );
    return response;
  } catch (err:any) {
    return err.message;
  }
};

export const deleteVideo = async (
  userId: string,
  videoId: string
): Promise<AxiosResponse<ApiResponse<string> | string>> => {
  try {
    const response = await axios.delete<ApiResponse<string>>(
      `${process.env.REACT_APP_NODE_API}video/${userId}/${videoId}`
    );
    return response;
  } catch (err:any) {
    return err.message;
  }
};

export const getAllVideos = async (): Promise<
  AxiosResponse<ApiResponse<VideoData[]> | string>
> => {
  try {
    const response = await axios.get<ApiResponse<VideoData[]>>(
      `${process.env.REACT_APP_NODE_API}video`
    );
    return response;
  } catch (err:any) {
    return err.message;
  }
};
