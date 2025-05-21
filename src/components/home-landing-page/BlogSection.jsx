import React from "react";
import blog1 from '../../assets/home-img/blog1.png'
import blog2 from '../../assets/home-img/blog2.png'

const BlogSection = () => {
    const blogs = [
        {
            title: "Top Gaming Events in 2025",
            description: "Upcoming tournaments and championships you shouldn't miss...",
            author: "John Smith",
            image: blog1,
            profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
            readMoreLink: "#",
        },
        {
            title: "Essential Gaming Setup Guide",
            description: "Building the perfect gaming setup for your needs...",
            author: "Sarah Johnson",
            image: blog2,
            profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
            readMoreLink: "#",
        },
    ];

    return (
        <div className="container py-5">
            <h4 className="mb-4 fw-bold">Latest from Our Blog</h4>
            <div className="row">
                {blogs.map((blog, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="card h-100 shadow-sm border-0">
                            <img src={blog.image} className="card-img-top" alt={blog.title} style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">{blog.title}</h5>
                                <p className="card-text text-muted">{blog.description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={blog.profilePic} alt={blog.author} className="rounded-circle me-2" width="35" height="35"
                                        />
                                        <span className="text-muted small">{blog.author}</span>
                                    </div>
                                    <a href={blog.readMoreLink} className="text-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
