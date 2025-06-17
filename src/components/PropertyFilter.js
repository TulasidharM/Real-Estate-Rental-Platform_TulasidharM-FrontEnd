import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const PropertyFilter = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        propertyType: 'All'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange(filters);
    };

    const handleReset = () => {
        setFilters({
            minPrice: '',
            maxPrice: '',
            propertyType: 'All'
        });
        onFilterChange({
            minPrice: '',
            maxPrice: '',
            propertyType: 'All'
        });
    };

    return (
        <Form onSubmit={handleSubmit} className="filter-form mb-4">
            <Row className="align-items-end g-3">
                <Col xs={12} md={3}>
                    <Form.Group>
                        <Form.Label>Min Price (ETH)</Form.Label>
                        <Form.Control
                            type="number"
                            name="minPrice"
                            value={filters.minPrice}
                            onChange={handleChange}
                            placeholder="0"
                            min="0"
                            step="0.01"
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={3}>
                    <Form.Group>
                        <Form.Label>Max Price (ETH)</Form.Label>
                        <Form.Control
                            type="number"
                            name="maxPrice"
                            value={filters.maxPrice}
                            onChange={handleChange}
                            placeholder="100"
                            min="0"
                            step="0.01"
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={3}>
                    <Form.Group>
                        <Form.Label>Property Type</Form.Label>
                        <Form.Select
                            name="propertyType"
                            value={filters.propertyType}
                            onChange={handleChange}
                        >
                            <option value="All">All Properties</option>
                            <option value="Cottage">Cottage</option>
                            <option value="Chalet">Chalet</option>
                            <option value="Manor">Manor</option>
                            <option value="Penthouse">Penthouse</option>
                            <option value="Farmhouse">Farmhouse</option>
                            <option value="Duplex">Duplex</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={3} className="d-flex gap-2">
                    <Button type="submit" className="filter-btn flex-grow-1">
                        Apply Filters
                    </Button>
                    <Button 
                        variant="outline-secondary" 
                        onClick={handleReset}
                        className="reset-btn"
                    >
                        Reset
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default PropertyFilter;