       {/* <div className="w-100 display-flex justify-center align-center">
                      <PlacesAutocomplete
                        onLoad={onLoad}
                        onPlaceChanged={onPlaceChanged}
                        value={address}
                        onChange={(value) => setAddress(value)}
                        onSelect={(selectedAddress) => handleSelect(selectedAddress, 'attractions')}
                        searchOptions={{
                          key: 'AIzaSyDzy3wz5yxKZv9CaxbAHUstxBLvan78zsY',
                          types: ['geocode'],
                          componentRestrictions: { country: 'co' },
                        }}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                          <div className="w-100 mb-5 mt-3 justify-center">
                            <div className="w-100 display-flex justify-center align-center">
                              <div
                                ref={resetColor}
                                variant='light'
                                style={{ backgroundColor }}
                                className='form-div  mx-3 p-3 text-left '
                                onClick={changeBgColor}>
                                <span className="mx-1 ">
                                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="faMagGlass text-left" />
                                </span>
                                <input {...getInputProps({
                                  placeholder: 'Venture City Search...',
                                  className: 'w-100 form-input search-btn-form',
                                })}
                                />
                              </div>
                            </div>
                            <div className="mt-3">
                              {loading &&
                                <div className="w-100 display-flex justify-center align-center">
                                  <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#0011ff", }} size='2xl' />
                                </div>
                              }
                              {suggestions.map(suggestion => (
                                <div key={suggestion.placeId} {...getSuggestionItemProps(suggestion, {})}
                                  className="w-100 search-data-item p-2" >
                                  <div className="search-data-icon-div">
                                    <Image src={process.env.PUBLIC_URL + "/assets/cities/placeholder.png"} alt={suggestion.description} className="search-data-icon" />
                                  </div>
                                  <div className="search-data-text">
                                    {suggestion.description}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete>
                    </div> */}



                    {/* <div className="w-100 display-flex justify-center align-center">

                      <PlacesAutocomplete
                        onLoad={onLoad}
                        onPlaceChanged={onPlaceChanged}
                        value={address}
                        onChange={(value) => setAddress(value)}
                        onSelect={(selectedAddress) => handleSelect(selectedAddress, 'restaurants')}
                        searchOptions={{
                          key: 'AIzaSyDzy3wz5yxKZv9CaxbAHUstxBLvan78zsY',
                          types: ['geocode'],
                          componentRestrictions: { country: 'co' },
                        }}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                          <div className="w-100 mb-5 mt-3 justify-center">
                            <div className="w-100 display-flex justify-center align-center">
                              <div
                                ref={resetColor}
                                variant='light'
                                style={{ backgroundColor }}
                                className='form-div  mx-3 p-3 text-left '
                                onClick={changeBgColor}>
                                <span className="mx-1 ">
                                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="faMagGlass text-left" />
                                </span>
                                <input {...getInputProps({
                                  placeholder: 'Venture City Search...',
                                  className: 'w-100 form-input search-btn-form',
                                })}
                                />
                              </div>
                            </div>
                            <div className="mt-3">
                              {loading &&
                                <div className="w-100 display-flex justify-center align-center">
                                  <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#0011ff", }} size='2xl' />
                                </div>
                              }
                              {suggestions.map(suggestion => (
                                <div key={suggestion.placeId} {...getSuggestionItemProps(suggestion, {})}
                                  className="w-100 search-data-item p-2" >
                                  <div className="search-data-icon-div">
                                    <Image src={process.env.PUBLIC_URL + "/assets/cities/placeholder.png"} alt={suggestion.description} className="search-data-icon" />
                                  </div>
                                  <div className="search-data-text">
                                    {suggestion.description}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete>
                    </div> */}