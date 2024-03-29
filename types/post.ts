export type Author = {
    userId: string;
    username: string;
    imageUrl: string;
};

export type PostProps = {
    id: string;
    author: Author;
    caption: string;
    tags: string[];
    imageUrls: string[];
    likes: string[];
    comments: string[];
    createdAt: Date;
    isEdited: boolean;
    handleNotification: (senderId: string, receiverId: string) => void;
};

export type IPost = {
    id: string;
    author: Author;
    caption: string;
    tags: string[];
    imageUrls: string[];
    likes: string[];
    comments: string[];
    createdAt: Date;
    isEdited: boolean;
};

export type UserPostData = {
    id: string;
    author: {
        userId: string;
        username: string;
        imageUrl: string;
    };
    caption: string;
    tags: string[];
    imageUrls: string[];
    likes: string[];
    comments: string[];
    createdAt: Date;
};

export type PostData = {
    id: string;
    author: {
        userId: string;
        username: string;
        imageUrl: string;
    };
    caption: string;
    tags: string[];
    imageUrls: string[];
    likes: string[];
    comments: string[];
    createdAt: string;
};
