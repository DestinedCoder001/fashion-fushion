// autocomplete types
export type SuggestionItem = {
  numberOfResults: number;
  searchTerm: string;
};
export interface AutoComplete {
  data: {
    suggestionGroups: [{ suggestions: SuggestionItem[] }];
  };
}
// item card props and data props

export interface ItemCardProps {
  name: string;
  brandName: string;
  imageUrl: string;
  additionalImageUrls: string;
  id: number;
  url: string;
  prevPrice: string;
  price: string;
}

export interface ItemProps {
  name: string;
  brandName: string;
  imageUrl: string;
  additionalImageUrls: string;
  id: number;
  url: string;
  price: {
    current: {
      text: string;
    };
    previous: {
      text: string;
    };
  };
}
export interface ItemCardData {
  data: {
    products: ItemProps[];
  };
}

export interface SingleProductData {
  data: {
    name: string;
    brandName: string;
    gender: string;
    description: {
      brandDescription: string;
      productDescription: string;
      careInfo: string;
    };
    images: {
      alternateText: string;
      url: string;
    }[];
    price: [
      {
        productPrice: {
          current: {
            text: string;
          };
          previous: {
            text: string;
          };
        };
      }
    ];
    variants: { size: string }[];
  };
  message: string;
}
